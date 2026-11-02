---
title: "AI每日精选 · 2026-11-03"
date: "2026-11-03T05:52:15+08:00"
draft: false
tags: ["ArXiv", "论文精选", "机器人操作", "多模态推理"]
categories: ["ArXiv 每日精选"]
description: "CaPtain 的机器人代码策略与 LARC 的连续潜在推理。"
showToc: true
tocopen: true
arxiv_batch: "2026-11-02"
arxiv_counts: {"cs.CV": 165, "cs.RO": 110, "cs.AI": 297, "cs.LG": 337, "cs.GR": 5, "cs.MM": 5}
---

本期精选两篇论文，分别讨论怎样训练会调用机器人接口的小模型，以及怎样让多模态模型用连续状态规划图像。CaPtain 把长程操作的成败反馈分配给具体代码请求，LARC 用目标图像的预测改善衡量潜在推理的价值。两项工作都在设计可训练的中间步骤，评估时则要分别看操作接口的边界，以及生成质量收益所需的训练和推理预算。

## 📄 论文精选

### CaPtain: A Pipeline for Post-Training Code-as-Policy Robot Agents

{{< paper-meta authors="Yijia Fan、Xilin He、Yilei Jiang、Dongming Wu、Jiaxu Wang、Xiangyu Yue" source="arXiv" date="2026-10-29 UTC · v1" arxiv="2610.40799" arxivURL="https://arxiv.org/abs/2610.40799" links="[{\"url\":\"https://huggingface.co/papers/2610.40799\",\"label\":\"HF Papers\",\"kind\":\"huggingface\"}]" directions="机器人操作、工具调用" note="11月2日公告及HF收录。原文表1、第4.4至5节。" >}}

**一句话总结**　把机器人操作写成多轮代码调用，再用仿真状态估计各次调用对任务成功的贡献。

**研究问题**　抓取、移动和释放可能跨越多轮请求。只用最终成败训练时，很难区分哪些动作改变了局面。

**核心方法**　CaPtain-Harness 为仿真和真机提供统一的感知、几何和受保护运动接口。团队先用 GPT-6 Astra 生成轨迹，对 Qwen3.5-4B 做监督微调，再进行多轮强化学习。

**技术亮点**　训练中的物理 critic 读取仿真器的精确状态，在同一请求序号比较动作前后的预测成功概率，从而给物理动作分配更直接的信用。部署策略依赖相机观察和接口回执，critic 留在仿真训练阶段。

**实验结果**　表1的240个留出 LIBERO 回合中，按宿主判定，成功率从 SFT 的55.4%升至73.8%。严格口径从52.1%升至67.5%。Astrabot XR1 上展示了两个完成的实机回合，所用策略经过该本体的仿真适配。

**应用场景 / 方向联系**　适合研究 VLM 如何通过低层接口获得闭环操作能力，以及 Agent 长程强化学习中的信用分配。

**研究价值与局限**　实验区分了策略可见信息和训练侧状态。强化学习限于单臂 LIBERO，持续力控超出当前接口的表达范围，实机证据来自两段示例。

### Latent Reasoning in Continuous Space for Unified Multimodal Models

{{< paper-meta authors="Byungwoo Jeon、Yoonwoo Jeong、Hyunseok Lee、Minsu Cho、Jinwoo Shin" source="arXiv" date="2026-10-30 UTC · v1" arxiv="2610.42149" arxivURL="https://arxiv.org/abs/2610.42149" links="[{\"url\":\"https://huggingface.co/papers/2610.42149\",\"label\":\"HF Papers\",\"kind\":\"huggingface\"}]" directions="统一多模态模型、图像生成、潜在推理" note="11月2日公告及HF收录。原文第2.3至2.4节、表2和表8、附录C。" >}}

**一句话总结**　LARC 将连续隐藏状态接入多模态推理轨迹，并以它对图像预测的帮助训练生成前的推理。

**研究问题**　文本思维链可以描述对象与属性，但图像生成还需要细粒度的布局信息。作者考察连续状态能否为生成模块保留更多相关线索。

**核心方法**　从 BAGEL 出发，课程式监督微调逐步引入连续推理步骤，将上一步隐藏状态作为下一步输入，并保留交错文本。强化学习阶段加入受控随机性以采样不同轨迹，再用冻结参考模型比较有无轨迹时对目标图像的预测。

**技术亮点**　实现中用同一噪声样本和时间步计算两路 Flow Matching 损失之差，作为似然改善的代理。额外的多样性奖励抑制隐藏状态趋同。

**实验结果**　表2报告 DPG-Bench 总分由 BAGEL 的85.07升至90.04，增加4.97分。表8中，课程微调后的 GenEval 为0.83，再加强化学习达到0.88。两项结果分别反映整套方法与后续训练阶段的比较。

**应用场景 / 方向联系**　可用于研究组合式文生图、属性绑定以及生成前的推理预算分配。

**研究价值与局限**　模型自身的生成损失为潜在轨迹提供训练信号。实验仍需要目标图像与课程数据，训练奖励依赖参考模型的损失代理，潜在步骤也难以像文本一样逐条审计。

## 📊 今日研究趋势

两篇论文都为最终结果之外的中间行为设计了训练信号。CaPtain 通过仿真中的状态变化分配动作信用。LARC 比较相同噪声条件下的生成损失，评估推理轨迹是否有助于预测目标图像。

## 🏆 最值得关注的 2 篇

1. **CaPtain** 展示了小型 VLM 如何学习多轮操作接口。建议对照阅读严格成功率与真机适配协议。
2. **LARC** 将连续推理与生成损失连接起来。表8有助于区分课程微调与强化学习的贡献。

来源为 arXiv 原文及 11 月 2 日 Hugging Face Daily Papers。首次提交日期按 arXiv Submission history 核验。


生成时间 2026-11-03T06:02:15+08:00（Asia/Singapore）。
