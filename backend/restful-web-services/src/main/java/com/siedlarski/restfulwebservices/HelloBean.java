package com.siedlarski.restfulwebservices;

public class HelloBean {
    private String essa;
    public HelloBean(String essa) {
        this.essa=essa;
    }

    public String getEssa() {
        return essa;
    }

    public void setEssa(String essa) {
        this.essa = essa;
    }

    @Override
    public String toString() {
        return "HelloBean{" +
                "essa='" + essa + '\'' +
                '}';
    }
}
