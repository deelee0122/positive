package com.positive.portfolio.positive.vo;


import lombok.*;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class HobbyVO {
    private  int hobby_id;
    private String hname;
    private String hcategory;
    private int hprice;
    private String hreview;
    private String hplace;
    private String hdate;
    private String hphoto;

}
