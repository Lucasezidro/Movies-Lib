import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --gray-900: #18181b;
        --gray-800: #27272a;
        --gray-700: #3f3f46;
        --gray-400: #a1a1aa;
        --gray-300: #cbd5e1;
        --gray-200: #e4e4e7;
        
        --yellow-600: #ca8a04;
        --yellow-500: #f59e0b;
        --yellow-400: #fbbf24;
        --yellow-300: #fde047;
        --yellow-200: #fde68a;
        --yellow-50: #fefce8;

        --purple-900: #4c1d95;
        --purple-800: #5b21b6;
        --purple-700: #6d28d9;
        --purple-600: #7c3aed;
        --purple-500: #8b5cf6;
    }

    * {
        font-family: Helvetica;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

        body {
        background-color: var(--gray-900);
        color: var(--yellow-50);
    }

    a {
        text-decoration: none;
        color: var(--yellow-400);
        transition: 0.5s;
    }

    a:hover {
        filter: brightness(0.8);
    }

`