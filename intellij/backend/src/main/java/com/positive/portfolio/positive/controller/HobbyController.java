package com.positive.portfolio.positive.controller;

import com.positive.portfolio.positive.vo.HobbyVO;
import com.positive.portfolio.positive.mapper.HobbyMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/hobbies")
public class HobbyController {

    @Autowired
    private HobbyMapper hobbyMapper;

    @GetMapping
    public List<HobbyVO> getHobbies() {
        return hobbyMapper.hobbyList();
    }
}
