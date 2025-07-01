// src/components/mypage/ProfileEdit.jsx
import React, { useState, useEffect } from "react";
import TitleBar from "../common/TitleBar";
import Button from "../common/Button";
import FormInput from "../common/FormInput";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";
import "./ProfileEdit.css";

function ProfileEdit() {
  const { user, updateUser } = useAuth();

  // User 테이블 정보 (읽기 전용 표시)
  const [userEmail, setUserEmail] = useState(user?.email || "");
  const [userNickname, setUserNickname] = useState(user?.nickname || "");

  // Customer 테이블 정보 (수정 가능)
  const [customerName, setCustomerName] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const [zipcode, setZipcode] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
  const [phone3, setPhone3] = useState("");

  const [emailReception, setEmailReception] = useState(false);
  const [smsReception, setSmsReception] = useState(false);

  // 이메일 인증 관련 상태
  const [verificationCode, setVerificationCode] = useState(""); // 사용자가 입력할 인증 코드
  const [isCodeSent, setIsCodeSent] = useState(false); // 인증 코드 발송 여부
  const [isEmailVerified, setIsEmailVerified] = useState(false); // 이메일 인증 완료 여부

  // 컴포넌트 마운트 시 Customer 정보 조회 및 user 정보 초기화
  useEffect(() => {
    if (user) {
      setCustomerName(user.name || "");
      setUserEmail(user.email || ""); // User email은 AuthContext에서 바로 가져옴
      setUserNickname(user.nickname || "");

      const fetchCustomerProfile = async () => {
        if (!user || !user.id) {
          console.warn("User ID not available for fetching customer profile.");
          return;
        }

        try {
          const API_URL = `http://localhost:8080/api/customer/profile/${user.id}`;
          const token = localStorage.getItem("userToken");

          const response = await axios.get(API_URL, {
            headers: { Authorization: `Bearer ${token}` },
          });

          const customerData = response.data;
          console.log("Customer 정보 조회 성공:", customerData);

          setZipcode(customerData.zipcode || "");
          setAddress1(customerData.address1 || "");
          setAddress2(customerData.address2 || "");

          const phoneParts = customerData.phone?.split("-") || ["", "", ""];
          setPhone1(phoneParts[0] || "");
          setPhone2(phoneParts[1] || "");
          setPhone3(phoneParts[2] || "");

          setEmailReception(customerData.emailReception || false);
          setSmsReception(customerData.smsReception || false);
        } catch (error) {
          console.error(
            "Customer 정보 조회 실패:",
            error.response ? error.response.data : error.message
          );
          alert(
            `고객 정보를 불러오는데 실패했습니다: ${
              error.response?.data?.message || "알 수 없는 오류 발생"
            }`
          );
        }
      };
      fetchCustomerProfile();
    }
  }, [user]);

  // 새 비밀번호와 확인 비밀번호 일치 여부 체크
  useEffect(() => {
    if (newPassword === "" && confirmNewPassword === "") {
      setPasswordMismatch(false);
    } else if (newPassword !== confirmNewPassword) {
      setPasswordMismatch(true);
    } else {
      setPasswordMismatch(false);
    }
  }, [newPassword, confirmNewPassword]);

  // 이메일 인증번호 발송 핸들러
  const handleSendVerificationCode = async () => {
    if (!userEmail) {
      alert("이메일 주소가 없습니다.");
      return;
    }
    try {
      // 이메일 인증번호 발송 API 호출
      const API_URL = "http://localhost:8080/api/auth/send-verification-code"; // 예시 API
      const token = localStorage.getItem("userToken");

      await axios.post(
        API_URL,
        { email: userEmail },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      alert("인증번호가 이메일로 발송되었습니다.");
      setIsCodeSent(true); // 코드 발송 상태로 변경
    } catch (error) {
      console.error(
        "인증번호 발송 실패:",
        error.response ? error.response.data : error.message
      );
      alert(
        `인증번호 발송 실패: ${
          error.response?.data?.message || "잠시 후 다시 시도해주세요."
        }`
      );
    }
  };

  // 이메일 인증 확인 핸들러
  const handleVerifyEmail = async () => {
    if (!userEmail || !verificationCode) {
      alert("이메일과 인증번호를 모두 입력해주세요.");
      return;
    }
    try {
      // 이메일 인증 확인 API 호출
      const API_URL = "http://localhost:8080/api/auth/verify-email-code"; // 예시 API
      const token = localStorage.getItem("userToken");

      await axios.post(
        API_URL,
        { email: userEmail, code: verificationCode },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      alert("이메일 인증이 완료되었습니다.");
      setIsEmailVerified(true); // 인증 완료 상태로 변경
      setIsCodeSent(false); // 인증 후에는 발송 상태 초기화
    } catch (error) {
      console.error(
        "인증 확인 실패:",
        error.response ? error.response.data : error.message
      );
      alert(
        `인증 확인 실패: ${
          error.response?.data?.message || "인증번호를 다시 확인해주세요."
        }`
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordMismatch) {
      alert("새 비밀번호가 일치하지 않습니다. 다시 확인해주세요.");
      return;
    }

    // 필수 필드 검사 (현재 비밀번호 등)
    if (!currentPassword) {
      alert("현재 비밀번호를 입력해주세요.");
      return;
    }
    // 이메일 인증이 필요한 경우 (필요 시 주석 해제)
    // if (!isEmailVerified) {
    //    alert("이메일 인증을 완료해주세요.");
    //    return;
    // }

    try {
      const userUpdateAPI = "http://localhost:8080/api/user/update-password";
      const customerUpdateAPI = `http://localhost:8080/api/customer/profile/${user?.id}`;
      const token = localStorage.getItem("userToken");

      // 1. 비밀번호 변경 요청 (새 비밀번호가 입력된 경우에만)
      if (newPassword && currentPassword) {
        try {
          await axios.put(
            userUpdateAPI,
            {
              email: user.email,
              currentPassword: currentPassword,
              newPassword: newPassword,
            },
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          alert("비밀번호가 성공적으로 변경되었습니다.");
          setNewPassword("");
          setConfirmNewPassword("");
        } catch (passwordError) {
          console.error(
            "비밀번호 변경 실패:",
            passwordError.response
              ? passwordError.response.data
              : passwordError.message
          );
          alert(
            `비밀번호 변경 실패: ${
              passwordError.response?.data?.message ||
              "현재 비밀번호를 확인해주세요."
            }`
          );
          return;
        }
      }

      // 2. Customer 정보 업데이트 요청
      const customerUpdateData = {
        name: customerName,
        zipcode: zipcode,
        address1: address1,
        address2: address2,
        phone: `${phone1}-${phone2}-${phone3}`,
        emailReception: emailReception,
        smsReception: smsReception,
      };

      const customerResponse = await axios.put(
        customerUpdateAPI,
        customerUpdateData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      console.log("고객 정보 수정 성공:", customerResponse.data);
      alert("회원정보 수정이 완료되었습니다!");

      // User 정보 업데이트 (현재는 닉네임 수정 기능이 없으므로 생략)
      // 만약 닉네임 수정이 가능하다면, 닉네임 수정 API를 별도로 호출하거나
      // userUpdateAPI에 닉네임 필드를 추가하여 함께 업데이트 후 AuthContext 업데이트
      // updateUser({ ...user, name: customerName, phone: `${phone1}-${phone2}-${phone3}`, ... });

      setCurrentPassword("");
    } catch (error) {
      console.error(
        "회원정보 수정 실패:",
        error.response ? error.response.data : error.message
      );
      alert(
        `회원정보 수정 실패: ${
          error.response?.data?.message || "정보 수정 중 오류가 발생했습니다."
        }`
      );
    }
  };

  return (
    <div className="profile-edit-section">
      <TitleBar title="회원정보 수정" />
      <div className="profile-edit-wrapper">
        <form className="profile-edit-form" onSubmit={handleSubmit}>
          {/* 회원정보 섹션 */}
          <div className="form-section-group">
            <h4 className="section-title">회원정보</h4>
            <div className="form-group row-group">
              <label htmlFor="customerName">이름</label>
              <div className="input-with-button-wrapper">
                <input
                  type="text"
                  id="customerName"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="이름"
                  className="full-width-input"
                />
              </div>
            </div>

            <div className="form-group row-group">
              <label>아이디</label>
              <div className="input-with-button-wrapper">
                <input
                  type="text"
                  id="userEmail"
                  value={userEmail}
                  readOnly
                  className="form-input-readonly full-width-input"
                />
                {/* 이메일 인증 관련 버튼 및 필드 */}
                {!isEmailVerified ? (
                  <>
                    {!isCodeSent ? (
                      <Button
                        type="button"
                        className="action-button small-button"
                        onClick={handleSendVerificationCode}
                      >
                        인증번호 발송
                      </Button>
                    ) : (
                      <Button
                        type="button"
                        className="action-button small-button"
                        disabled
                      >
                        재발송
                      </Button>
                    )}
                  </>
                ) : (
                  <Button
                    type="button"
                    className="action-button small-button verified-button"
                    disabled
                  >
                    인증 완료
                  </Button>
                )}
              </div>
            </div>

            {isCodeSent && !isEmailVerified && (
              <div className="form-group row-group">
                <label>인증번호</label>
                <div className="input-with-button-wrapper">
                  <input
                    type="text"
                    id="verificationCode"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    placeholder="인증번호 입력"
                    className="full-width-input"
                  />
                  <Button
                    type="button"
                    className="action-button small-button"
                    onClick={handleVerifyEmail}
                  >
                    인증확인
                  </Button>
                </div>
              </div>
            )}
          </div>{" "}
          {/* End 회원정보 섹션 */}
          {/* 비밀번호 변경 섹션 */}
          <div className="form-section-group">
            <h4 className="section-title">비밀번호 변경</h4>
            <div className="form-group row-group">
              <label htmlFor="currentPassword">현재 비밀번호</label>
              <input
                type="password"
                id="currentPassword"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="현재 비밀번호를 입력해주세요."
                className="full-width-input"
              />
            </div>
            <div className="form-group row-group">
              <label htmlFor="newPassword">새 비밀번호</label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="새로운 비밀번호를 입력해주세요."
                className="full-width-input"
              />
            </div>
            <div className="form-group row-group">
              <label htmlFor="confirmNewPassword">새 비밀번호 확인</label>
              <input
                type="password"
                id="confirmNewPassword"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                placeholder="새로운 비밀번호를 다시 입력해주세요."
                className={`full-width-input ${
                  passwordMismatch ? "input-invalid" : ""
                }`}
              />
              {passwordMismatch && (
                <p className="error-message">
                  새로운 비밀번호가 일치하지 않습니다.
                </p>
              )}
            </div>
          </div>{" "}
          {/* End 비밀번호 변경 섹션 */}
          {/* 배송정보 섹션 */}
          <div className="form-section-group">
            <h4 className="section-title">배송정보</h4>
            <div className="form-group row-group">
              <label htmlFor="zipcode">우편번호</label>
              <div className="input-with-button-wrapper">
                <input
                  type="text"
                  id="zipcode"
                  value={zipcode}
                  onChange={(e) => setZipcode(e.target.value)}
                  placeholder="우편번호"
                  className="zipcode-input"
                />
                <Button
                  type="button"
                  className="action-button small-button"
                  onClick={() => alert("주소 검색 기능 (팝업 등)")}
                >
                  주소검색
                </Button>
              </div>
            </div>
            <div className="form-group row-group">
              <label htmlFor="address1">주소</label>
              <input
                type="text"
                id="address1"
                value={address1}
                onChange={(e) => setAddress1(e.target.value)}
                placeholder="기본 주소"
                required
                className="full-width-input"
              />
            </div>
            <div className="form-group row-group">
              <label htmlFor="address2">상세 주소</label>
              <input
                type="text"
                id="address2"
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
                placeholder="상세 주소 (예: 동, 호수)"
                className="full-width-input"
              />
            </div>
          </div>{" "}
          {/* End 배송정보 섹션 */}
          {/* 연락처 섹션 */}
          <div className="form-section-group">
            <h4 className="section-title">연락처</h4>
            <div className="form-group row-group">
              <label htmlFor="phone1">휴대폰 번호</label>
              <div className="phone-inputs">
                <input
                  type="text"
                  id="phone1"
                  value={phone1}
                  onChange={(e) => setPhone1(e.target.value)}
                  maxLength="3"
                  placeholder="010"
                  className="phone-part"
                />
                <span>-</span>
                <input
                  type="text"
                  id="phone2"
                  value={phone2}
                  onChange={(e) => setPhone2(e.target.value)}
                  maxLength="4"
                  placeholder="1234"
                  className="phone-part"
                />
                <span>-</span>
                <input
                  type="text"
                  id="phone3"
                  value={phone3}
                  onChange={(e) => setPhone3(e.target.value)}
                  maxLength="4"
                  placeholder="5678"
                  className="phone-part"
                />
              </div>
            </div>
          </div>{" "}
          {/* End 연락처 섹션 */}
          {/* 수신설정 섹션 */}
          <div className="form-section-group">
            <h4 className="section-title">수신설정</h4>
            <div className="form-group receive-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={emailReception}
                  onChange={(e) => setEmailReception(e.target.checked)}
                />
                이메일 수신 동의
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={smsReception}
                  onChange={(e) => setSmsReception(e.target.checked)}
                />
                SMS 수신 동의
              </label>
            </div>
          </div>{" "}
          {/* End 수신설정 섹션 */}
          <div className="button-group">
            <Button type="button" className="cancel-button">
              취소
            </Button>
            <Button type="submit" className="submit-button">
              수정하기
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileEdit;
