package com.positive.portfolio.positive.vo;

import lombok.*;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString

public class UserVO {
    private int uno;
    private String user_id;
    private String username;
    private String password;
    private String email;
    private String first_name;
    private String last_name;
    private String phone_number;
    private String date_of_birth;
    private String role;
    ;
}