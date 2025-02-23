// app/data/works.ts
import { Works } from '../types/works';

export const works: Works = {
  items: [
    {
      title: "VoCデータ収集の自動化",
      period: "2024年9月 - 2025年1月",
      description: `お客様の声（VoC）を収集するために、データ収集を自動化する仕組みを構築。要件定義からテスト・本番移行まで1人で対応する部分が多く、幅広い工程を担当。`,
      technologies: ["Python", "Google Apps Script", "ChatGPT"],
    },
    {
      title: "社内向けAIチャットボット開発",
      period: "2023年8月 - 2024年8月",
      description: `社内のトレーナー向けマニュアルをAIチャットボットに学習させ、必要な情報を効率的に検索できる仕組みを開発し、業務効率化を実現。プロジェクト管理と開発作業を両立し、サブリーダーとしてチームを牽引。`,
      technologies: ["Python", "TypeScript", "Amazon Bedrock(Claude)"],
    },
    {
      title: "故障内容データ連携バッチ開発",
      period: "2023年6月 - 2023年7月",
      description: `設置タブレットから入力された故障内容をKintone経由でBacklogへ自動連携するバッチ処理を開発。APIを活用し、システム間のデータ連携をスムーズに実現。`,
      technologies: ["Python"],
    },
    {
      title: "SAP ECCのEOSに伴うSAP S4/HANA移行",
      period: "2021年4月 - 2023年5月",
      description: `ECC6.0からSAP S4/HANAへの移行に伴い、SQLを介したTableauデータソースのI/F構築を担当。US販社との仕様調整などを実施。大規模移行プロジェクトで、グローバルチームとのコミュニケーションを取りながら開発を推進。`,
      technologies: [
        "SQL",
        "SAP S4/HANA",
        "Tableau",
        "Windows",
        "SQL Server",
        "Jira",
      ],
    },
    {
      title: "Windows ServerのEOSに伴うDBサーバのクラウド移行",
      period: "2019年2月 - 2020年3月",
      description: `サーバのEOSに伴い、次期サーバへの移行計画・実施を担当。移行計画書やテスト計画書を作成。開発案件だけでなく、移行案件やPMO業務を通じてプロジェクトマネジメントを強化。`,
      technologies: ["SQL", "Windows", "SQL Server"],
    },
    {
      title: "SQL Server パフォーマンス改善",
      period: "2019年2月 - 2020年3月",
      description: `Tableau連携時のSQL処理時間を短縮するため、パフォーマンスチューニングを実施。実行プランの分析や統計情報の最適化などを担当し、処理時間を大幅短縮に成功。SQLパフォーマンスチューニングの知識を深め、従来の半分以下まで処理時間を改善。`,
      technologies: ["SQL", "Windows", "SQL Server"],
    },
    {
      title: "リース契約情報管理システム",
      period: "2018年9月 - 2019年1月",
      description: `Excel VBAでリース契約情報を管理する仕組みを開発。DBを使用しない業務システムであっても、保守性を考慮した設計・実装の重要性を学ぶ。`,
      technologies: ["Excel VBA", "Windows"],
    },
    {
      title: "MPS損益管理レポート開発",
      period: "2018年3月 - 2018年8月",
      description: `MPS(Managed Print Services)ビジネス契約の収益管理レポートをTableauで実装し、そのためのDB設計・開発をSQL Serverで行う。要件を踏まえた基本設計・詳細設計など、上流工程にも携わり、ユーザー視点を意識した開発を実施。`,
      technologies: [
        "SQL",
        "Excel VBA",
        "C#",
        "Windows",
        "SQL Server",
        "DataSpider",
        "Tableau",
      ],
    },
    {
      title: "製造原価予実分析システム",
      period: "2017年8月 - 2018年2月",
      description: `SAP R/3から取得した製造原価データをSQL Serverで加工し、Tableauへ連携して予実分析レポートを実現。`,
      technologies: [
        "SQL",
        "Windows",
        "SQL Server",
        "SAP R/3",
        "SPECTRE",
        "JP1",
        "Tableau",
      ],
    },
  ],
};
