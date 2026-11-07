---
title: "AI每日精选 · 2026-11-02（补遗）"
date: "2026-11-02T06:00:00+08:00"
lastmod: "2026-11-07T15:37:58+08:00"
draft: false
tags: ["ArXiv", "论文精选", "具身智能", "三维运动"]
categories: ["ArXiv 每日精选"]
description: "补读接触采集、具身视频感知与三维运动预测。"
showToc: true
tocopen: true
arxiv_batch: "2026-10-30"
arxiv_counts: {"cs.CV": 374, "cs.RO": 189, "cs.AI": 605, "cs.LG": 608, "cs.GR": 22, "cs.MM": 14}
---

这期补遗聚焦机器人怎样从人类操作中学习接触和三维运动。Tactus 提供手指受力与姿态测量，GenSight 将深度、分割和光流放进同一个视频模型，WorldFlow 则直接预测三维查询点的未来位移。三篇分别提供数据采集、几何感知和动作规划可用的中间表示。本期于 11 月 7 日补发，沿用 10 月 30 日公告批次的存档。

## 📄 论文精选

### Tactus: Tactile & Pose Sensing Glove for Natural Dexterity Data Collection

{{< paper-meta authors="Li Guan、Rachael Granberry、Sahar Aseeri 等" source="arXiv" date="2026-10-29 UTC · v1" arxiv="2610.39076" arxivURL="https://arxiv.org/abs/2610.39076v1" directions="触觉、灵巧操作数据" note="11 月 7 日增补。参见原文第 V 节、结论。" >}}

**研究问题**　如何在抓握遮挡最严重的时候同时记录手部姿态和接触力？

**核心方法**　薄型织物手套集成电容式指尖力传感器和惯性单元，用第一视角视觉提供全局位置，再融合惯性数据追踪遮挡中的关节运动。

**技术亮点**　分别评估传感器校准、跟踪精度及穿戴是否干扰自然抓握，使采集质量和行为偏移可分开测量。

**实验结果**　作者报告 95% 置信度下最低可检力 0.59 N，离线轨迹优化得到根对齐指尖误差 11.0 mm。穿戴时任务耗时约为裸手的 106%。

**应用场景 / 方向联系**　可为接触条件策略和人类操作数据采集提供测量基线。

**研究价值与局限**　穿戴影响实验仅有 5 名参与者，姿态精度来自离线优化。

### Seeing and Imagining as One: Unified Video Generation and 4D Perception for Embodied World Modeling

{{< paper-meta authors="Haitang Feng、Zhuoman Liu、Zhennan Wang 等" source="arXiv" date="2026-10-29 UTC · v1" arxiv="2610.39232" arxivURL="https://arxiv.org/abs/2610.39232v1" directions="具身世界模型、4D 感知" note="11 月 7 日增补。参见原文表 1–2。" >}}

**研究问题**　世界模型能否同时生成未来画面和可供感知使用的几何、运动信息？

**核心方法**　GenSight 用同一预训练视频 DiT 建模视频、深度、机器人分割和相对首帧的二维光流，并通过轻量任务调制区分不同输出。

**技术亮点**　把未来生成和已观测视频的稠密感知放进同一个速度预测框架，便于比较共享表示在两种模式中的作用。

**实验结果**　表 1 的 RoboMIND 未见任务设置中，GenSight 在四个生成器中取得最低 FVD、FID 和 LPIPS，但原始光流 EPE 低于它的是 RynnWorld4D。

**应用场景 / 方向联系**　适合研究视频预训练如何同时服务于预测和感知。

**研究价值与局限**　部分深度和光流评估依赖外部估计器，生成指标不能替代闭环控制结果。

### WorldFlow: Joint Video and 3D Motion Prediction via Large-Scale Pretraining

{{< paper-meta authors="Yuhao Lu、Jiongxu Chen、Hexiang Wei 等" source="arXiv" date="2026-10-29 UTC · v1" arxiv="2610.39278" arxivURL="https://arxiv.org/abs/2610.39278v1" directions="世界模型、三维运动预测" note="11 月 7 日增补。参见原文SpatialCog 实验、真机评估。" >}}

**研究问题**　怎样让视频世界模型显式输出三维轨迹，便于下游机器人使用？

**核心方法**　WorldFlow 将查询点的未来位移编码为与视频网格对应的连续 token，用 Mixture-of-Transformers 在 rectified flow 下联合生成视频和三维位移。

**技术亮点**　视频和三维运动相互提供监督，论文也训练了只预测轨迹的变体以分离联合建模的收益。

**实验结果**　SpatialCog 平均位移误差为 0.060 m，比最强外部基线低 54.2%。文中的真机执行实验成功 24/36 次。

**应用场景 / 方向联系**　可把预测的物体运动接入规划或动作重定向。

**研究价值与局限**　真机测试规模有限，细粒度运动边界还受空间表示分辨率影响。

## 📊 今日研究趋势

三项工作位于同一条操作链的不同位置。测得的触觉与姿态可作为示范监督，预测深度和光流可用于检查几何一致性，而显式三维位移可以直接进入下游规划。

## 🏆 最值得关注的 3 篇

1. **Tactus** 适合查看指尖力校准与佩戴对任务耗时的影响。
2. **GenSight** 可从表 1 和表 2 对照生成和感知指标。
3. **WorldFlow** 用三维轨迹误差和真机结果检验显式运动表示。

三篇论文均于 10 月 29 日首次提交，日期按 arXiv Submission history 核验。
