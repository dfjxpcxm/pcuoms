/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.seaboxdata.core.base;

import org.mybatis.spring.support.SqlSessionDaoSupport;

import java.util.List;
import java.util.Map;

/**
 * 
 * @author Administrator
 */
public class SysSqlDao extends SqlSessionDaoSupport {
    
    public <T> T getObj(String sysid) {
        return this.getSqlSession().selectOne("com.seaboxdata.??.save", sysid);
    }
    public List<Map<String, Object>> select(String tableName, Map<String, Object> m) {
        String sql = "select * from " + tableName;
        return this.getSqlSession().selectList(sql, m);
    }
    public List<Map<String, Object>> selectMapper(String nameSpace, String mapper, Map<String, Object> m){
    	String sql = nameSpace + "." + mapper;
    	return this.getSqlSession().selectList(sql, m);
    }
}
