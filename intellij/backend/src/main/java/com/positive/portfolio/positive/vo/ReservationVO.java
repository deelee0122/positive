package com.positive.portfolio.positive.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ReservationVO {
    private int reservation_id;
    private String rdate;
    private String rtime;
    private int rnumppl;
    private String login_id;
    private int hid;
}
