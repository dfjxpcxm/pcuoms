package com.seaboxdata.web.ens;

import com.seaboxdata.core.base.BaseController;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by cc on 2018/8/6.
 */
@Controller
@RequestMapping("/ens")
public class EnsCNController extends BaseController {
	
    /**
     * 首页
     */
    @RequestMapping
    public String index(ModelMap map){
//    	ensService.getUnapvdForm();
//    	System.out.println("----------------"+ensService.getUnapvdForm());
        return "page/ens/index";
    }
    
    /**
     * 园区概况
     */
    @RequestMapping
    public String development(ModelMap map){
        return "page/ens/development";
    }
   
    
  
    /**
     * 招商引资
     */
    @RequestMapping
    public String environment(ModelMap map){
        return "page/ens/environment";
    }
    
    /**
     * 企业发展
     */
    @RequestMapping
    public String supervise(ModelMap map){
        return "page/ens/supervise";
    }
    
    /**
     * 经济发展
     */
    @RequestMapping
    public String innovate(ModelMap map){
        return "page/ens/innovate";
    }
    
    /**
     * 经济发展
     */
    @RequestMapping
    public String item(ModelMap map){
        return "page/ens/item";
    }
    
   
}
