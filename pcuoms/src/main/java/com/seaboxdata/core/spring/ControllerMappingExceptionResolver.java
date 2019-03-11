package com.seaboxdata.core.spring;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.SimpleMappingExceptionResolver;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;

/**
 * @className: ControllerMappingExceptionResolver
 * @description: 继承至SimpleMappingExceptionResolver的自定义的统一异常处理
 * @author: Administrator
 * @date 2016年1月12日
 */
public class ControllerMappingExceptionResolver extends SimpleMappingExceptionResolver {
    private final static Logger log = LoggerFactory.getLogger(ControllerMappingExceptionResolver.class);

    @Override
    protected ModelAndView doResolveException(HttpServletRequest request, HttpServletResponse response,
                                              Object handler, Exception ex) {
        Map<String, Exception> model = new HashMap<String, Exception>();
        model.put("ex", ex);
        ModelAndView modelAndView = new ModelAndView("error",model);

		/*错误日志输出到控制台*/
        log.error(ex.getMessage());

        return modelAndView;
    }

}
