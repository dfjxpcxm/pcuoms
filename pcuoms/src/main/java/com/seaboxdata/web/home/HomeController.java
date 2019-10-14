package com.seaboxdata.web.home;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

/**
 * Created by cc on 2018/7/31.
 */
@Controller
@Scope("prototype")
public class HomeController {

    /**
     * 首页
     * @return
     */
    @RequestMapping(value = "/")
    public String index(){
       return "redirect:mainframe/index";
    }
}
