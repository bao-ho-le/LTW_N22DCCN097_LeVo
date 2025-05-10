package com.ggs.gaminggearshort.utils;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class Login {

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class LoginData {
        private String username;
        private String password;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class AuthResponse {
        private String role;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class ErrorResponse {
        private String message;
    }
}


