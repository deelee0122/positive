package com.positive.portfolio.positive.mapper;

import com.positive.portfolio.positive.vo.ReservationVO;
import java.util.List;

public interface ReservationMapper {
    int insertReservation(ReservationVO vo);
    List<ReservationVO> reservationList();
}
