---
title: "AI每日精选 · 2026-11-05"
date: "2026-11-05T06:02:23+08:00"
lastmod: "2026-11-07T15:37:58+08:00"
draft: false
tags: ["ArXiv", "论文精选", "视频世界模型", "Flow Matching"]
categories: ["ArXiv 每日精选"]
description: "DreamX 的潜在动作学习与 U-JiT 的像素空间视频生成。"
showToc: true
tocopen: true
arxiv_batch: "2026-11-04"
arxiv_counts: {"cs.CV": 260, "cs.RO": 125, "cs.AI": 413, "cs.LG": 445, "cs.GR": 6, "cs.MM": 8}
---

本期五篇讨论视觉生成与机器人控制需要保留哪些信息。DreamX 压缩动作，U-JiT 在生成网络内部压缩时空像素。增补的三篇考察材料参数怎样进入扩散策略、如何联合生成静态与动态骨架，以及少步图像模型能否直接学习多个教师的能力。

## 📄 论文精选

### DreamX: Video Diffusion Model is a Universal Latent Action Learner

{{< paper-meta authors="Jisoo Kim、Chaehyun Kim 等（KAIST、NVIDIA）" source="arXiv" date="2026-11-03 UTC · v1" arxiv="2611.05377" arxivURL="https://arxiv.org/abs/2611.05377" links="[{\"url\":\"https://huggingface.co/papers/2611.05377\",\"label\":\"HF Papers\",\"kind\":\"huggingface\"}]" directions="具身智能、视频扩散" note="11月4日 arXiv 公告及 Hugging Face 收录。参见第3节、表3和附录B.3。" >}}

**一句话总结**　用预训练视频扩散模型提取紧凑的潜在动作，并将这些动作表示用作机器人策略的预测目标。

**研究问题**　从视频变化中提取动作时，场景外观和执行者形态也会进入表示，给跨本体迁移带来困难。

**核心方法**　可学习查询与视频 token 一同参与时空注意力，汇聚帧间变化。得到的潜在动作替代文本条件，与初始帧一起驱动未来帧重建。

**技术亮点**　初始帧提供场景外观，使重建任务推动查询保留动作所需的变化信息。每个潜在视频帧对应的 token 数从1200压到4，策略运行时可直接预测潜在动作与底层动作。

**实验结果**　表3的真机抽屉实验中，DreamX 在三种抽屉配置下平均子目标成功率为96.7%，Mimic-Video 为50.0%。该指标对到达与推合两个子目标取平均。DreamX 每次策略调用耗时1.474秒，对照方法为28.226秒。

**应用场景 / 方向联系**　可用于研究人类视频如何为机器人策略提供动作监督，以及潜在动作如何减少部署时的生成负担。

**研究价值与局限**　实验显示紧凑表示可以支持下游控制。真机结果限于抽屉任务，策略训练仍使用机器人示范。跨本体视频迁移与低层控制的适用范围需要分别检验。

### Pixel-space video generation with U-JiT

{{< paper-meta authors="Théophane Vallaeys、Jakob Verbeek、Matthieu Cord（FAIR, Meta、Sorbonne University、Valeo.ai）" source="arXiv" date="2026-11-03 UTC · v1" arxiv="2611.04764" arxivURL="https://arxiv.org/abs/2611.04764" directions="像素空间视频生成、Flow Matching" note="11月4日 arXiv 公告。参见第3节及表3、4。" >}}

**一句话总结**　用分层 patch 的 U 形 Transformer 直接生成像素视频，在网络内部兼顾细节与时空压缩。

**研究问题**　视频增加了时间维度。单级大 patch 在输入投影时需要一次压缩大量像素，容易损失高频细节。

**核心方法**　U-JiT 在外层处理较细的时空 patch，在内层用更粗的 patch 和更宽的通道建模整体结构。模型预测干净样本并使用速度损失训练，推理时通过时间步重排调整各噪声阶段的采样预算。

**技术亮点**　模型在内部按层改变压缩尺度，从原始像素端到端训练。论文同时比较了架构与采样策略的影响。

**实验结果**　Kinetics-600 的256×256单帧续生成实验中，表3在 f32t8 设置下报告 U-JiT-XL 的 FVD/FID 为2.55/7.20。使用 Wan2.2 tokenizer 的 ll-JiT-XL 为2.66/9.97。表4的65帧类别条件生成中，U-JiT-XL 的 FVD/FID 为3.00/12.65。

**应用场景 / 方向联系**　适合研究像素空间 Flow Matching，以及时空压缩方式对视频生成的影响。

**研究价值与局限**　论文在同一数据集内从头训练生成器并比较多种 tokenizer。结果主要覆盖续帧和类别条件任务，能否推广到开放域文生视频仍待验证。

### Physical Diffusion Policy via MPM-Guided 3D Gaussian Simulation

{{< paper-meta authors="Can Wang、Qiyuan Qiao、Lei Liu 等" source="arXiv" date="2026-11-03 UTC · v1" arxiv="2611.04493" arxivURL="https://arxiv.org/abs/2611.04493v1" directions="物理推理、扩散策略" note="11 月 7 日增补。参见原文物理条件消融、表 IV 与 VI。" >}}

**研究问题**　不同材料引起的形变与接触差异，如何进入从视觉示范学习的策略？

**核心方法**　用三维 Gaussian Splatting 和可微 Material Point Method 从视觉示范估计材料参数，再将这些参数用于条件扩散策略，并按材料选择专家。

**技术亮点**　物理估计与控制分开优化，作者用参数检索近似计算代价较高的在线物理反演。

**实验结果**　仅加入物理条件的消融中，相对 vanilla Diffusion Policy，平均成功率由仿真 83.3% 升至 87.9%，真机由 28.9% 升至 49.4%。

**应用场景 / 方向联系**　适合研究形变物体的操作及视觉到物理参数的迁移。

**研究价值与局限**　弹性模量、屈服阈值和黏度估计误差会降低成功率，记忆检索也受训练覆盖限制。

### FlowRig: Unified Skeleton Generation for 3D and 4D Meshes via Flow Matching

{{< paper-meta authors="Fengzhi Guo、Nate Morrill、Shiqi Li、Cheng Zhang" source="arXiv" date="2026-11-02 UTC · v1" arxiv="2611.03775" arxivURL="https://arxiv.org/abs/2611.03775v1" directions="Flow Matching、3D/4D 表示" note="11 月 7 日增补。参见原文第 3 节、表 1–2。" >}}

**研究问题**　如何用同一模型为静态网格和动态网格序列生成骨架？

**核心方法**　FlowRig 用网格特征为条件，通过 Flow Matching 从噪声骨骼槽位生成关节与骨骼，再用图预测头确定父节点。动态版本联合处理时间窗口。

**技术亮点**　支持骨骼数量控制，并估计骨骼位置与存在的不确定性，可在多次采样后挑选候选。

**实验结果**　表 1 中，利用不确定性从五个候选里挑选的版本，在 Articulation-XL 2.0 和 Diverse-Pose 的静态重建对比中优于所列基线。表 2 另检验动态骨架拓扑与时序一致性。

**应用场景 / 方向联系**　为可编辑的 4D 资产及运动表示提供统一生成接口。

**研究价值与局限**　五次采样的成绩包含筛选预算，且动态训练依赖成对网格与骨架标注。

### StepX-OPD: Rethinking Multi-Teacher On-Policy Distillation in Diffusion Models

{{< paper-meta authors="Chenru Wang、Xuanyang Zhang、Yucheng Han 等" source="arXiv" date="2026-11-03 UTC · v1" arxiv="2611.04386" arxivURL="https://arxiv.org/abs/2611.04386v1" directions="扩散蒸馏、少步图像生成" note="11 月 7 日增补。参见原文表 1、第 4 节。" >}}

**研究问题**　将能力整合和步数压缩分成两个阶段，是否会让短轨迹学生失去教师的部分能力？

**核心方法**　StepX-OPD 直接在少步学生自身访问的状态上使用多个冻结教师进行监督，并对接近干净图像的低噪声部分额外施加速度回归损失。

**技术亮点**　用 rollout 的 KL 分解分析各位置的监督权重，也检查多教师整合带来的非预期文字生成。

**实验结果**　SD3.5-Medium 和 FLUX.1-dev 的四步设置均取得所比较少步方法中最高的归一化平均分。SD3.5-Medium 的 GPU 小时较顺序 DiffusionOPD 加步数蒸馏少约 37%。

**应用场景 / 方向联系**　可用来设计需要兼顾文字渲染、指令遵循和审美的蒸馏流程。

**研究价值与局限**　收益取决于教师组合和指标，非预期文字生成仍需单独评估。

## 📊 今日研究趋势

DreamX 将动作提取为可供策略预测的少量 token，U-JiT 则在生成网络内部改变时空表示的粒度。评价前者应看具体控制任务中的子目标成功率与调用时间，评价后者则应结合生成设置与 FVD、FID 的统计口径。

增补的材料参数和骨架拓扑为模型提供可解释的中间变量。StepX-OPD 则说明，少步生成的评估还应检查不同能力是否在同一采样预算下保留。


## 🏆 最值得关注的 3 篇

1. **DreamX** 展示视频生成特征如何成为跨本体动作表示，以及这种表示如何参与策略学习。
2. **U-JiT** 提供像素空间与潜空间视频生成的受控比较，可结合表3和表4考察两种生成条件。
3. **StepX-OPD** 提供同一少步预算下的多项能力比较，并单独报告训练成本。

来源为 arXiv 原文与 11 月 4 日 Hugging Face Daily Papers。首次提交日期按 Submission history 核验。

生成时间 2026-11-05T06:12:23+08:00（Asia/Singapore）。

11 月 7 日增补 3 篇。
