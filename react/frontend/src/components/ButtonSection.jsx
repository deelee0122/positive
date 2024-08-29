import React, { useState } from 'react';
import { Button, Stack } from '@mui/material';
import './Mypage.css';

const ButtonSection = () => {
  const [leftBtnClick, setLeftBtnClick] = useState('outlined');
  const [rightBtnClick, setRightBtnClick] = useState('outlined');

  const leftClick = () => {
    setLeftBtnClick(prevVariant =>
      prevVariant === 'outlined' ? 'contained' : 'outlined');
  };

  const rightClick = () => {
    setRightBtnClick(prevVariant =>
      prevVariant === 'outlined' ? 'contained' : 'outlined');
  };

  return (
    <Stack spacing={2} direction="row">
      <Button
        className="custom-button"
        variant={leftBtnClick}
        onClick={leftClick}
      >
        예약 확정만 보기
      </Button>
      <Button
        className="custom-button"
        variant={rightBtnClick}
        onClick={rightClick}
      >
        취소내역 숨기기
      </Button>
    </Stack>
  );
};

export default ButtonSection;
