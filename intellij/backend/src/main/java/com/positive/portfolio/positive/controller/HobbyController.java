package com.positive.portfolio.positive.controller;

import com.positive.portfolio.positive.mapper.HobbyMapper;
import com.positive.portfolio.positive.vo.HobbyVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class HobbyController {

    @Autowired
    private HobbyMapper hobbyMapper;

    @GetMapping("/api/hobbies")
    public List<HobbyVO> getHobbies() {
        return hobbyMapper.list();
    }



}
