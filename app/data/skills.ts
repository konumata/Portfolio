import { Skills } from '../types/skills';

export const skills: Skills = {
    categories: [
        {
            name: "Front-End",
            skills: [
                { label: "JavaScript", value: 2, description: "WEBサイトを作成する際に習得しました。" },
                { label: "TypeScript", value: 2, description: "WEBサイトを作成する際に習得しました。" },
                { label: "HTML/CSS", value: 2, description: "基本的なマークアップとスタイリングが可能です。" }
            ]
        },
        {
            name: "Back-End",
            skills: [
                { label: "Python", value: 5, description: "私がこよなく愛する言語であり、WEBサイトやデスクトップアプリ、Webスクレイピングなどの開発を行いました。" },
                { label: "C#", value: 4, description: "Windowsアプリの開発で使用しました。" },
                { label: "Ruby", value: 1, description: "基本的な開発経験があります。" }
            ]
        },
        {
            name: "DB",
            skills: [
                { label: "MySQL", value: 2, description: "基本的なクエリの作成と実行が可能です。" },
                { label: "PostgreSQL", value: 2, description: "基本的な操作が可能です。" },
                { label: "SQL Server", value: 5, description: "SQL Serverは主に開発用のDBとして使用しました。" }
            ]
        },
        {
            name: "Frame-Work",
            skills: [
                { label: "Django", value: 2, description: "Webアプリケーション開発が可能です。" },
                { label: "Node.js", value: 2, description: "Webスクレイピングが可能です。" },
                { label: "Next.js", value: 2, description: "本サイトはNext.jsで作成し、Vercelにて公開されています。" }
            ]
        },
        {
            name: "OS",
            skills: [
                { label: "Windows", value: 5, description: "普段の開発はWindowsで行っています。" },
                { label: "Linux", value: 3, description: "LinuxはUbuntuのインストールから環境構築、開発まで可能です。" },
                { label: "macOS", value: 2, description: "基本的な操作が可能です。" }
            ]
        },
        {
            name: "Others",
            skills: [
                { label: "Google Apps Script(GAS)", value: 5, description: "仕事用に使用しています。" },
                { label: "Tableau", value: 4, description: "仕事用に使用しています。" },
                { label: "VS Code", value: 4, description: "普段のコーディングはVS Codeで行っています。" },
                { label: "GitHub", value: 3, description: "開発用のリポジトリを管理しています。" }
            ]
        }
    ]
};