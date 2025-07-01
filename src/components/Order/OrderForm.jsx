// src/components/order/OrderForm.jsx
import React, { useState, useEffect } from "react";
import Button from "../common/Button";
import axios from "axios";
import "./OrderForm.css";

function OrderForm() {
  // 각 주문 항목의 구조: { id: number, url: string, price: string, platform: string, quantity: number, memo: string }
  const [items, setItems] = useState([
    { id: 1, url: "", price: "", platform: "", quantity: 1, memo: "" }, // 초기 항목에 수량 1, 빈 메모 추가
  ]);
  const [totalPrice, setTotalPrice] = useState(0);

  // items 배열의 price와 quantity가 변경될 때마다 totalPrice를 계산
  useEffect(() => {
    const calculatedTotal = items.reduce((sum, item) => {
      const itemPrice = parseInt(item.price.replace(/,/g, "") || 0);
      const itemQuantity = parseInt(item.quantity || 1); // 수량이 없거나 유효하지 않으면 1로 간주
      return sum + itemPrice * itemQuantity;
    }, 0);
    setTotalPrice(calculatedTotal);
  }, [items]);

  // 새로운 항목 추가
  const handleAddItem = () => {
    setItems((prevItems) => [
      ...prevItems,
      {
        id: prevItems.length
          ? Math.max(...prevItems.map((item) => item.id)) + 1
          : 1,
        url: "",
        price: "",
        platform: "",
        quantity: 1,
        memo: "",
      },
    ]);
  };

  // 항목 삭제
  const handleRemoveItem = (idToRemove) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== idToRemove));
  };

  // 특정 항목의 필드 값 변경
  const handleItemChange = (id, field, value) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          if (field === "price") {
            const rawValue = String(value).replace(/[^0-9]/g, ""); // 숫자 이외 제거
            return { ...item, [field]: rawValue }; // 표시용 콤마는 onBlur에서 처리
          } else if (field === "quantity") {
            const numValue = parseInt(value) || 1; // 숫자로 변환, 유효하지 않으면 1
            return { ...item, [field]: Math.max(1, numValue) }; // 최소 수량 1
          }
          return { ...item, [field]: value };
        }
        return item;
      })
    );
  };

  // 가격 필드에서 포커스를 잃었을 때 (콤마 포맷팅)
  const handlePriceBlur = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          const parsedPrice = parseInt(item.price.replace(/,/g, "") || 0);
          return { ...item, price: parsedPrice.toLocaleString() };
        }
        return item;
      })
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 모든 필수 항목이 채워졌는지 검사 (수량은 기본값 1이 있으므로 제외)
    const allFieldsFilled = items.every(
      (item) => item.url && item.price && item.platform
    );
    if (!allFieldsFilled) {
      alert("모든 주문 항목의 URL, 가격, 플랫폼을 입력해주세요.");
      return;
    }

    // 백엔드로 전송할 데이터 준비 (콤마 제거된 숫자 가격, 정수 수량)
    const ordersToSubmit = items.map((item) => ({
      url: item.url,
      price: parseInt(item.price.replace(/,/g, "")),
      platform: item.platform,
      quantity: parseInt(item.quantity), // 수량도 정수로 변환하여 전송
      memo: item.memo, // 메모 포함
    }));

    try {
      const API_URL = "http://localhost:8080/api/orders/request-multi"; // 여러 항목을 위한 새 API 엔드포인트
      const token = localStorage.getItem("userToken");

      const response = await axios.post(
        API_URL,
        { items: ordersToSubmit },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      console.log("여러 주문 요청 성공:", response.data);
      alert(
        "주문 요청들이 성공적으로 접수되었습니다. 관리자 확인 후 최종 견적서가 발송됩니다."
      );

      // 폼 초기화
      setItems([
        { id: 1, url: "", price: "", platform: "", quantity: 1, memo: "" },
      ]);
    } catch (error) {
      console.error(
        "여러 주문 요청 실패:",
        error.response ? error.response.data : error.message
      );
      alert(
        `주문 요청 실패: ${
          error.response?.data?.message || "주문 요청 중 오류가 발생했습니다."
        }`
      );
    }
  };

  return (
    <div className="order-form-container">
      <form onSubmit={handleSubmit}>
        {items.map((item, index) => (
          <div key={item.id} className="order-item-group">
            <h3>{`상품 #${index + 1}`}</h3>
            {items.length > 1 && (
              <Button
                type="button"
                className="remove-item-button"
                onClick={() => handleRemoveItem(item.id)}
              >
                삭제
              </Button>
            )}

            <div className="form-group">
              <label htmlFor={`url-${item.id}`}>상품 URL</label>
              <input
                type="url"
                id={`url-${item.id}`}
                value={item.url}
                onChange={(e) =>
                  handleItemChange(item.id, "url", e.target.value)
                }
                required
                placeholder="구매를 원하는 상품의 URL을 입력해주세요."
                className="order-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor={`price-${item.id}`}>상품 가격</label>
              <input
                type="text"
                id={`price-${item.id}`}
                value={item.price}
                onChange={(e) =>
                  handleItemChange(item.id, "price", e.target.value)
                }
                onBlur={() => handlePriceBlur(item.id)}
                required
                placeholder="상품의 원화 또는 엔화 가격을 입력해주세요."
                className="order-input"
              />
            </div>

            <div className="form-group quantity-platform-group">
              <div className="quantity-input-wrapper">
                <label htmlFor={`quantity-${item.id}`}>수량</label>
                <input
                  type="number"
                  id={`quantity-${item.id}`}
                  value={item.quantity}
                  onChange={(e) =>
                    handleItemChange(item.id, "quantity", e.target.value)
                  }
                  min="1"
                  required
                  className="order-input small-input"
                />
              </div>
              <div className="platform-select-wrapper">
                <label htmlFor={`platform-${item.id}`}>구매 플랫폼</label>
                <select
                  id={`platform-${item.id}`}
                  value={item.platform}
                  onChange={(e) =>
                    handleItemChange(item.id, "platform", e.target.value)
                  }
                  className="custom-select order-input"
                  required
                >
                  <option value="">-- 플랫폼 선택 --</option>
                  <option value="yahoo_auction">야후옥션</option>
                  <option value="mercari">메루카리</option>
                  <option value="rakuten">라쿠텐</option>
                  <option value="amazon_jp">아마존(JP)</option>
                  <option value="others">기타</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor={`memo-${item.id}`}>메모 (선택 사항)</label>
              <textarea
                id={`memo-${item.id}`}
                value={item.memo}
                onChange={(e) =>
                  handleItemChange(item.id, "memo", e.target.value)
                }
                placeholder="상품에 대한 특별 요청 사항 (예: 색상, 사이즈, 추가 구성품 등)"
                rows="3"
                className="order-input textarea-input"
              ></textarea>
            </div>
          </div>
        ))}

        <div className="add-item-row">
          <Button
            type="button"
            className="add-item-button"
            onClick={handleAddItem}
          >
            + 다른 상품 추가
          </Button>
        </div>

        {/* 총 합계 표시 영역 */}
        <div className="total-price-display">
          <label>총 예상 결제 금액:</label>
          <div className="price-value">
            <strong>{totalPrice.toLocaleString()} 원</strong>
            <span className="info-text">
              *환율 및 수수료 미포함 예상 금액입니다.
            </span>
          </div>
        </div>

        <Button type="submit" className="submit-order-button">
          주문 요청하기
        </Button>
      </form>
    </div>
  );
}

export default OrderForm;
