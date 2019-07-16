package com.seaboxdata.web.main;

import com.seaboxdata.core.base.SysBaseController;

import com.seaboxdata.core.util.common.PropertiesUtil;
import com.seaboxdata.core.util.common.QCommon;
import com.seaboxdata.sysmng.gotopuchengmng.puchengbrandchar.IPuChengBrandCharService;
import com.seaboxdata.sysmng.gotopuchengmng.puchenghistoricculture.IPuChengHistoricCultureService;
import com.seaboxdata.sysmng.gotopuchengmng.puchenghumangeog.IPuChengHumanGeogService;
import com.seaboxdata.sysmng.gotopuchengmng.puchengruraltourism.IPuChengRuralTourismService;
import com.seaboxdata.sysmng.gotopuchengmng.puchengsummarize.IPuChengSummarizeService;
import com.seaboxdata.sysmng.mainframemng.hometag.IHomeTagMngService;
import com.seaboxdata.sysmng.mainframemng.propagatemng.IPropagateMngService;
import com.seaboxdata.sysmng.puchengachievement.puchengindustincm.IPuChengIndustIncmService;
import com.seaboxdata.sysmng.puchengachievement.puchengindustinvest.IPuChengIndustInvestService;
import com.seaboxdata.sysmng.puchengachievement.puchengindustsumm.IPuChengIndustSummService;
import com.seaboxdata.sysmng.puchengachievement.puchengplatachieve.IPuChengPlatAchieveService;
import com.seaboxdata.sysmng.puchengachievement.puchengprojectincm.IPuChengProjectIncmService;
import com.seaboxdata.sysmng.puchengachievement.puchengprojectinvest.IPuChengProjectInvestService;
import com.seaboxdata.sysmng.puchengachievement.puchengprojectsumm.IPuChengProjectSummService;
import com.seaboxdata.sysmng.puchengfuture.economic.IPuChengEconomicService;
import com.seaboxdata.sysmng.puchengfuture.puchengsmartcity.IPuChengSmartCityService;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.annotation.Resource;

/**
 * Created by cc on 2018/8/6.
 */
@Controller
@Scope("prototype")
@RequestMapping(value = "/mainframe")
public class MainframeController extends SysBaseController {

    @Resource(name = "homeTagMngService")
    private IHomeTagMngService homeTagMngService;

    @Resource(name = "propagateMngService")
    private IPropagateMngService propagateMngService;

    @Resource(name = "puChengSummarizeService")
    private IPuChengSummarizeService puChengSummarizeService;


    @Resource(name = "puChengHistoricCultureService")
    private IPuChengHistoricCultureService puChenHistoricCultureService;

    @Resource(name = "puChengHumanGeogService")
    private IPuChengHumanGeogService puChengHumanGeogService;


    @Resource(name = "puChengBrandCharService")
    private IPuChengBrandCharService puChengBrandCharService;



    @Resource(name = "puChengRuralTourismService")
    private IPuChengRuralTourismService puChengRuralTourismService;

    @Resource(name = "puChengIndustIncmService")
    private IPuChengIndustIncmService puChengIndustIncmService;

    @Resource(name = "puChengProjectIncmService")
    private IPuChengProjectIncmService puChengProjectIncmService;


    @Resource(name = "puChengIndustSummService")
    private IPuChengIndustSummService puChengIndustSummService;

    @Resource(name = "puChengProjectSummService")
    private IPuChengProjectSummService puChengProjectSummService;

    @Resource(name = "puChengIndustInvestService")
    private IPuChengIndustInvestService puChengIndustInvestService;

    @Resource(name = "puChengProjectInvestService")
    private IPuChengProjectInvestService puChengProjectInvestService;

    @Resource(name = "puChengSmartCityService")
    private IPuChengSmartCityService puChengSmartCityService;

    @Resource(name = "puChengPlatAchieveService")
    private IPuChengPlatAchieveService puChengPlatAchieveService;

    @Resource(name = "puChengEconomicService")
    private IPuChengEconomicService puChengEconomicService;






    /**
     * 首页
     */
    @RequestMapping
    public String index(ModelMap model){
        String flag = request.getParameter("flag");
        String tags = homeTagMngService.getMainframeHomeTagInfo(flag);
        String jsonStr = propagateMngService.getMainframePropagateInfo(flag);
        System.out.println("tags="+tags);
        System.out.println("jsonStr="+jsonStr);
        model.addAttribute("tg", tags);
        model.addAttribute("data", jsonStr);
        return "page/home/index";
    }
    
    /**
     * 大美浦城
     */
    @RequestMapping
    public String goBeautiful(ModelMap model){
        String flag=request.getParameter("flag");
        //概述
        String sumStr = puChengSummarizeService.getPuChengSummarizeInfo(flag);
        //文人地理
        String gesStr = puChengHumanGeogService.getPuChengHumanGeogInfo(flag);
        //历史文化
        String hisStr = puChenHistoricCultureService.getPuChengHistoricCultureInfo(flag);

        //品牌特色
        String jsonStr = puChengBrandCharService.getPuChengBrandCharInfo(flag);
        //乡村旅游
        String touralStr = puChengRuralTourismService.getPuChengRuralTourismInfo(flag);

        System.out.println("sumStr="+sumStr);
        System.out.println("bsonStr="+jsonStr);
        System.out.println("touralStr="+touralStr);
        System.out.println("gesStr="+gesStr);
        System.out.println("hisStr="+hisStr);
        model.addAttribute("ss", sumStr);
        model.addAttribute("data", jsonStr);
        model.addAttribute("ts", touralStr);
        model.addAttribute("gs", gesStr);
        model.addAttribute("hs", hisStr);
        return "page/dmpc/dmpc";
    }
    
    /**
     * 活力浦城
     */
    @RequestMapping
    public String goVitality(ModelMap map){
        return "page/dmpc/hlpc";
    }
   
   
    
  
    /**
     * 浦城成果
     */
    @RequestMapping
    public String goAchievement(ModelMap model){
        String flag=request.getParameter("flag");
        //产业成果指标
        String is = puChengIndustIncmService.getPCIndustIncomeInfo(flag);
        //项目成果指标
        String ps = puChengProjectIncmService.getPCProjectIncomeInfo(flag);
        //产业成果概述
        String iy = puChengIndustSummService.getPCIndustSummyInfo(flag);
        //项目成果概述
        String py = puChengProjectSummService.getPCProjectSummyInfo(flag);
        //产业成果投资指标
        String ii =  puChengIndustInvestService.getPCIndustInvestIndexInfo(flag);
        //产业成果投资图片
        String ig = puChengIndustInvestService.getPCIndustInvestImgInfo(flag);
        //项目成果投资指标
        String pi = puChengProjectInvestService.getPCProjectInvestIndexInfo(flag);
        //项目成果投资图片
        String pg = puChengProjectInvestService.getPCProjectInvestImgInfo(flag);



        System.out.println("is="+is);
        System.out.println("ps="+ps);
        System.out.println("iy="+iy);
        System.out.println("py="+py);
        System.out.println("ii="+ii);
        System.out.println("ig="+ig);
        System.out.println("pi="+pi);
        System.out.println("pg="+pg);


        model.addAttribute("is", is);
        model.addAttribute("ps", ps);
        model.addAttribute("iy", iy);
        model.addAttribute("py", py);
        model.addAttribute("ii", ii);
        model.addAttribute("ig", ig);
        model.addAttribute("pi", pi);
        model.addAttribute("pg", pg);

        return "page/pccg/pccg";
    }



    /**
     * 浦城成果
     */
    @RequestMapping
    public String goSmartCity(ModelMap model,String p){
        //平台成果数据
        String flag=request.getParameter("flag");
        String pa = puChengPlatAchieveService.getPCPlatAchieveInfo(flag);
        System.out.println("pa="+pa);
        String id = DEFAULT_TOOLBAR_ID;
        if(null == p || "".equals(p)){
            id = id;
        }else{
            id = p;
        }

        System.out.println("id="+id);
        model.addAttribute("pa", pa);
        model.addAttribute("id", id);
        return "page/smart/smart";
    }
    /**
     * 浦城未来
     */
    @RequestMapping
    public String  goFuture(ModelMap model){
        String flag=request.getParameter("flag");
        String is = puChengSmartCityService.getPCLivingCultInfo(flag);
        String es =  puChengEconomicService.getPCEconomicInfo(flag);
        model.addAttribute("is", is);
        model.addAttribute("es", es);
        return "page/pcwl/pcwl";
    }


    /**
     * 登录浦城支撑管理系统
     */
    @RequestMapping
    public String  goPcmssLogin(ModelMap model){
        String pcmssUrl = PropertiesUtil.getPropery("pcmss.portal.login.url");
        String url = getLoginUrl(pcmssUrl);
        return url;
    }



    public static String getLoginUrl(String url){
        String casUrl = PropertiesUtil.getPropery("sso.cas.server.login.url");
        String retUrl = SystemInfoConstants.SYS_REDIRECT.concat(casUrl).concat(SystemInfoConstants.CAS_SERVICE_PARAM).concat(QCommon.urlEncode(url));
        return retUrl;
    }


    private final static String DEFAULT_TOOLBAR_ID = "l3" ;




   
}
