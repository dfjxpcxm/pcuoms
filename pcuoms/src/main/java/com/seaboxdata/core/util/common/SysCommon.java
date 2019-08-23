package com.seaboxdata.core.util.common;

public class SysCommon {

    public static void main(String[] args) {
        String path  = getFilePath();
        System.out.println(path);
    }


    public static String getFilePath(){
        String os = System.getProperty("os.name").toLowerCase();
        String filePath = "";
        if (os.startsWith("win")) {
            filePath = PropertiesUtil.getPropery("win.file.dir");
        }else{
            filePath = PropertiesUtil.getPropery("linux.file.dir");
        }
        return filePath;
    }

}