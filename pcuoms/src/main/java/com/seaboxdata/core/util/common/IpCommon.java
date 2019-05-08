package com.seaboxdata.core.util.common;

import java.net.InetAddress;
import java.net.UnknownHostException;

public class IpCommon {

    public static void main(String[] args) {
        boolean result = isValidRange("192.168.4.1", "192.168.45.112", "192.168.0.25");
        System.out.println(result);
    }

    public static boolean isValidRange(String ipStart, String ipEnd, String ipToCheck) {
        try {
            long ipLo = ipTolong(InetAddress.getByName(ipStart));
            long ipHi = ipTolong(InetAddress.getByName(ipEnd));
            long ipcheck = ipTolong(InetAddress.getByName(ipToCheck));
            return (ipcheck > ipLo && ipcheck < ipHi);
        } catch (UnknownHostException e) {
            e.printStackTrace();
            return false;

        }
    }

    public static long ipTolong(InetAddress ip) {
        long result = 0;
        byte[] ipAdds = ip.getAddress();
        for (byte b : ipAdds) {
            result <<= 8;
            result |= b & 0xff;
        }
        return result;
    }
}