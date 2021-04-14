package com.example.resourceserveropaque.web.controller;

import org.springframework.security.oauth2.server.resource.authentication.BearerTokenAuthentication;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class HelloController {

    @GetMapping("/hello")
    public Map<String, String> hello(JwtAuthenticationToken authentication) {
        return Map.of("message", "Hello, " + authentication.getTokenAttributes().get("preferred_username") + "!");
    }
}
