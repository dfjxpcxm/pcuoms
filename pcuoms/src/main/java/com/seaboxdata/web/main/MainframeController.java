package com.seaboxdata.web.main;

import com.seaboxdata.core.base.SysBaseController;

import com.seaboxdata.sysmng.mainframemng.propagatemng.IPropagateMngService;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;

/**
 * Created by cc on 2018/8/6.
 */
@Controller
@Scope("prototype")
@RequestMapping(value = "/mainframe")
public class MainframeController extends SysBaseController {

    @Resource(name = "propagateMngService")
    private IPropagateMngService propagateMngService;

    /**
     * 首页
     */
    @RequestMapping
    public String index(ModelMap model){
        String jsonStr = propagateMngService.getMainframePropagateInfo();
        System.out.println("jsonStr="+jsonStr);
        model.addAttribute("data", jsonStr);
        return "page/home/index";
    }
    
    /**
     * 大美浦城
     */
    @RequestMapping
    public String goBeautiful(ModelMap map){
        return "page/dmpc/dmpc";
    }
   
    
  
    /**
     * 浦城成果
     */
    @RequestMapping
    public String goAchievement(ModelMap map){
        return "page/pccg/pccg";
    }
    
    /**
     * 浦城未来
     */
    @RequestMapping
    public String  goFuture(ModelMap map){
        return "page/pcwl/pcwl";
    }
   
}
