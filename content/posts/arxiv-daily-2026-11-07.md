---
title: "AI每日精选 · 2026-11-07"
date: "2026-11-07T05:59:33+08:00"
draft: false
tags: ["ArXiv", "论文精选", "VLA", "空间推理"]
categories: ["ArXiv 每日精选"]
description: "VFlash 的并行图元解码与 SLA 的三维空间监督。"
showToc: true
tocopen: true
arxiv_batch: "2026-11-06"
arxiv_counts: {"cs.CV": 258, "cs.RO": 115, "cs.AI": 361, "cs.LG": 417, "cs.GR": 16, "cs.MM": 6}
---

本期精选两篇机器人空间推理研究。VFlash 将轨迹和检测框作为完整结构并行生成，考察更快的解码能否保留空间精度。SLA 在持续预训练中对齐三维感知特征，考察这种监督能否迁移到物体移动和场景变化下的操作。两篇工作分别在输出与训练阶段利用空间结构。

## 📄 论文精选

### VFlash: Fast, Accurate Visual Planning via Flash Primitive Decoding

{{< paper-meta authors="Yu-Cheng Chou、Shihao Wang、Jin Huang 等" source="arXiv" date="2026-11-05 UTC · v1" arxiv="2611.08449" arxivURL="https://arxiv.org/abs/2611.08449" links="[{\"url\":\"https://huggingface.co/papers/2611.08449\",\"label\":\"HF Papers\",\"kind\":\"huggingface\"}]" directions="具身智能、视觉规划、空间推理" note="11 月 6 日 arXiv 公告及 Hugging Face 收录。参见第 2 节及表 4、6、11。" >}}

**一句话总结**　VFlash 并行预测一整段视觉轨迹或一个检测框，减少视觉语言模型逐个生成坐标的次数。

**研究问题**　机器人用轨迹、关键点和检测框表达空间计划。逐 token 生成坐标时，增加轨迹密度或输出更多目标都会拉长解码时间。

**核心方法**　先让自回归视觉语言模型输出图元的起始标记，再由轻量草稿模型并行填充图元内的坐标。结构校验通过后，整块写入上下文，主模型更新缓存。校验失败时，回退到受约束的自回归解码，文本则继续走逐 token 验证的推测解码路径。

**技术亮点**　草稿模型以标注坐标为监督，因此并行输出可以偏离主模型的逐 token 预测。输出格式和坐标约束在接受前检查，无需额外的神经网络调用。

**实验结果**　表 4 中，同为仅预测三维轨迹的设置，AgiBot 开环平均位移误差从 0.083 米降至 0.042 米，落在 5 厘米以内的航点比例从 50.3% 升至 73.1%。表 6 的 MolmoSpaces 实验中，平均操作成功率从 62.6% 升至 70.2%。表 11 的 Jetson Thor 单样本测量中，相对于逐 token 自回归，单步端到端耗时从 3552.7 毫秒降至 703.3 毫秒。

**应用场景 / 方向联系**　适合研究如何让 VLM 快速输出可供机器人动作模型使用的空间计划。

**研究价值与局限**　表 4 用相同主模型对比解码器，能较直接地检验解码差异。表 6 同时改变了条件编码器并加入计划，因此其收益不能单独归因于解码方式。直接接受图元依赖预定义的输出结构。

### SLA: Scaling Spatial-Language-Action Model via Continual Pre-training

{{< paper-meta authors="Fuhao Li、Wenxuan Song、Qizhou Huang 等（香港科技大学（广州）、OLA Dimensions、北京智源人工智能研究院、清华大学）" source="arXiv" date="2026-11-05 UTC · v1" arxiv="2611.08373" arxivURL="https://arxiv.org/abs/2611.08373" links="[{\"url\":\"https://huggingface.co/papers/2611.08373\",\"label\":\"HF Papers\",\"kind\":\"huggingface\"}]" directions="机器人操作、VLA、三维空间感知" note="11 月 6 日 arXiv 公告及 Hugging Face 收录。参见第 3 节及表 3、6、11。" >}}

**一句话总结**　SLA 在 VLA 持续预训练与任务后训练中加入三维特征监督，部署时移除这条对齐支路。

**研究问题**　只继承二维视觉语言预训练的策略，可能缺少精确操作所需的跨视角几何信息。公开机器人数据的深度与相机标定也常有缺失。

**核心方法**　以 π0.5 为起点，用冻结的 OmniVGGT 根据多视角图像及可用的几何标注生成空间特征。将 VLA 各层视觉 token 经投影和门控融合后，与相同视角和位置的教师特征做余弦对齐，并保留连续动作的 Flow Matching 损失。

**技术亮点**　缺失几何标注的样本仍可参与训练。三维教师、投影与对齐门控仅在训练时使用，推理仍保留策略所用的历史图像输入。

**实验结果**　表 3 的 RoboTwin 2.0 Clean2Random 设置下，SLA 的成功率为 72.3%，较 π0.5 高 26.3 个百分点。表 11 在八个真机条件下按物体计分，SLA 平均成功率为 83.8%，π0.5 为 59.8%，仅在后训练阶段引入空间监督的 Spatial Forcing 为 68.0%。

**应用场景 / 方向联系**　适合研究异构示范如何为 VLA 提供可迁移的几何信息，尤其是目标移动和少样本跨本体适配。

**研究价值与局限**　表 6 分别开关持续预训练和后训练中的空间监督，有助于拆解两个阶段的作用。真机评估覆盖论文指定的两种机器人平台与任务，跨本体设置仍使用目标平台的额外示范。

## 📊 今日研究趋势

VFlash 用坐标与轨迹把空间计划显式传给下游动作模型，SLA 用训练时对齐把几何信息留在策略的隐表示里。前者可以单独评估轨迹误差与解码延迟，后者可以通过不同训练阶段的消融和真机扰动实验评估空间监督的作用。

## 🏆 最值得关注的 2 篇

1. **VFlash** 用同主模型的解码器对照，检验结构化并行预测对三维轨迹的影响。
2. **SLA** 给出持续预训练与后训练分别使用空间监督的实验，并报告不同真机条件下的操作结果。

来源为 arXiv 原文与 11 月 6 日 Hugging Face Daily Papers。首次提交日期按 Submission history 核验。

生成时间 2026-11-07T06:09:33+08:00（Asia/Singapore）。
