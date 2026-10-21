---
title: "AI每日精选 · 2026-10-22"
date: "2026-10-22T05:55:14+08:00"
draft: false
tags: ["ArXiv", "论文精选", "AI研究", "世界模型", "视觉触觉", "4D生成", "Diffusion", "机器人Agent"]
categories: ["ArXiv 每日精选"]
description: "精选6篇：PhysCanvas视觉触觉策略评估、MoDDiT稀疏计算、AEON显式4D生成、VPM点轨迹预测、AgenticRoboRL规划器训练与AdaDex灵巧技能。"
showToc: true
tocopen: true
arxiv_batch: "2026-10-21"
arxiv_counts: {"cs.CV": 287, "cs.RO": 126, "cs.AI": 473, "cs.LG": 408, "cs.GR": 20, "cs.MM": 8}
---

本期精选 **6 篇论文**，关注模型怎样把中间表示变成可复用的能力：触觉能否让想象中的接触更可信，点轨迹与显式4D场景能否约束跨视角运动，稀疏计算又能否带来实际效率？机器人部分进一步讨论训练规划器和从短演示学习可调整技能。阅读时重点区分评估相关性、任务成功率、追踪进度与真实运行成本，并留意每种方法对状态、标定和训练数据的依赖。

## 📄 论文精选

### Physical Canvas: A Vision Tactile World Model For Robot Policy Evaluation And Learning

{{< paper-meta
  authors="Zebin Xing、Yuhang Zheng、Yupeng Zheng、Yichen Zhang 等；中科院自动化所、Anyverse Robotics、NUS等"
  source="arXiv"
  date="2026-10-20 17:54 UTC · v1"
  arxiv="2610.28613"
  arxivURL="https://arxiv.org/abs/2610.28613"
  directions="视觉触觉、世界模型、策略评估"
  note="核对第3–4节、图8、表4及附录B/C；相关系数与任务成功率分开。"
>}}

**一句话总结：** 将视觉和光学触觉放进统一生成画布，用任务一致性校准世界模型，再用于策略评估和后训练。

**研究问题：** 视频看起来合理，并不代表接触是否成功也预测正确。若世界模型给出错误触觉或任务状态，用它评价、优化策略就可能把策略带偏。

**核心方法：** PhysCanvas共同建模多视角RGB、触觉图像、标记点位移和任务状态，共享视频VAE与生成骨干。正运动学和相机投影生成动作motion images，提供空间对齐条件；初始RGB锚点与更新参考观测支持顺序生成。冻结的Scene、Modality、State Reward Models分别约束场景保持、视觉触觉兼容和任务结果一致性，随后在模型内进行GRPO策略更新。

**技术亮点：** 把“像素预测好”与“任务反馈可信”分开监督。奖励模型仍需真实rollout和人工标注支持，不是无需实机数据的模拟替代品。

**实验结果：** 四项真机任务中，图8加入状态监督后，世界模型与真机成功率的**逐任务Pearson相关系数算术均值**从 **0.602升至0.885**，不是把所有样本混合计算的相关性。表4中，π0.5平均真机成功率从SFT的 **59.1%升至70.8%**，增加11.7个百分点；各任务收益不同，不能说所有任务都改善。相关性消融与完整一致性模型下的策略优化属于不同实验。

**应用场景 / 方向联系：** 适合接触丰富操作的策略筛选、触觉预测和世界模型辅助后训练。

**研究价值与局限：** 让任务语义一致性进入评估闭环很有价值。不过四任务证据和任务相关奖励模型限制了外推；生成触觉与真实力学一致仍需单独检验，模型内奖励也可能产生可被策略利用的偏差。

---

### MoDDiT: Simple Token Routing in Diffusion Transformers

{{< paper-meta
  authors="Jarek Liesen、Matthew T. Jackson、Benjamin Ellis、Shimon Whiteson、Jakob N. Foerster；British Open-ended Learning and Discovery"
  source="arXiv"
  date="2026-10-20 12:05 UTC · v1"
  arxiv="2610.28086"
  arxivURL="https://arxiv.org/abs/2610.28086"
  directions="Diffusion Transformer、稀疏计算"
  note="核对第3–5节、表1及Limitations；FLOPs不等于实际延迟。"
>}}

**一句话总结：** 让DiT学会哪些token值得进入注意力与MLP，按内容和噪声阶段分配计算。

**研究问题：** 稠密DiT对背景和重要主体同样计算，浪费结构化图像的稀疏性。如何在不直接删除整段信息的情况下减少重复处理？

**核心方法：** MoDDiT对注意力和MLP分别设置路由器，训练采用带Gumbel扰动的top-K选择并逐步减弱探索；选中token的更新经门控加回残差，未选中token保留原值。注意力按样本分配固定容量，MLP训练预算可跨样本分配，二者具有不同路由行为。

**技术亮点：** 路由的是计算更新而非让未选token从状态中消失，也不是现成稠密模型上的免训练剪枝。学习到的分配与语义、噪声水平及视频运动相关。

**实验结果：** 1X视频预测的200k EMA检查点、400条成对验证clip上，12.5%容量配置在0.5/1/2秒预测的PSNR分别提高 **0.677/0.376/0.213 dB**，计数的去噪器FLOPs减少 **36.92%**。稀疏和稠密模型训练batch为256与217，不能视为完全相同训练样本预算。12.5%也不等于系统总成本只剩八分之一。局限部分明确：小批量生成可能更慢，gather/scatter与优化稠密矩阵乘法会削弱实际收益。

**应用场景 / 方向联系：** 适合从头训练计算高效DiT、视频预测和稀疏自回归蒸馏。

**研究价值与局限：** 提供了可解释的动态计算接口，但需要训练路由和配置容量；FLOPs节省不能替代吞吐、延迟和设备上的实际测量。

---

### AEON: Unifying Video and 3D World Models

{{< paper-meta
  authors="Weiqi Zhang、Wenyuan Zhang、Yu-Shen Liu、Junsheng Zhou；清华大学软件学院"
  source="arXiv"
  date="2026-10-20 17:59 UTC · v1"
  arxiv="2610.28631"
  arxivURL="https://arxiv.org/abs/2610.28631"
  directions="4D生成、显式几何、世界模型"
  note="核对第3–4节、表2/3及Limitations；长期融合为未来方向。"
>}}

**一句话总结：** 将视频生成潜变量直接转成可渲染4D高斯场景，尝试同时保留外观与显式动态几何。

**研究问题：** 视频生成有丰富外观先验却容易跨视角不一致；显式3D生成便于探索，却常偏静态。怎样让生成结果成为可重渲染的动态表示？

**核心方法：** AEON先训练4D Reconstruction Model，从单目视频联合预测深度、相机、外观和动态参数；再用Domain Adapter把视频生成latent映射到重建latent，通过教师—学生蒸馏输出4DGS。每个primitive有时间参考、寿命与速度，可在连续时间渲染，不只是缓存逐帧图片。

**技术亮点：** 避开“先VAE解码视频、再重建”的误差串联，将生成与几何解码接口对齐。训练使用几何监督和重建教师，不能概括成仅凭无标注单目视频恢复度量几何。

**实验结果：** 表2在共享预设相机轨迹下比较4D生成，AEON（Wan2.2）的VBench Subject Consistency为 **0.875**、Motion Smoothness为 **0.980**；Lyra分别为0.864和0.974。该表支持该渲染协议下的视觉质量，不能证明物理规律正确。表3另测Dycheck/DaVis重建，生成评测与重建评测应分别阅读。

**应用场景 / 方向联系：** 适合文本/图像到动态场景、可探索4D内容与视频latent几何解码。

**研究价值与局限：** 显式4D表示让生成结果更便于复用。不过时长仍受视频骨干窗口限制，持续生成并融合新primitive仍是未来方向；从未观察到的区域可能出现空洞，不能将“持久表示”写成无限完整世界。

---

### Learning the 4D World through Point Trajectory Forecasting

{{< paper-meta
  authors="Byungwoo Jeon、Sunghwan Hong、Dohyeon Kim 等；KAIST、ETH Zürich、首尔大学、Physics Sim Lab、RLWRLD、NYU"
  source="arXiv"
  date="2026-10-20 17:45 UTC · v1"
  arxiv="2610.28594"
  arxivURL="https://arxiv.org/abs/2610.28594"
  links="[{\"url\": \"https://huggingface.co/papers/2610.28594\", \"label\": \"HF Papers\", \"kind\": \"huggingface\"}]"
  directions="多视角预测、3D轨迹、机器人控制"
  note="核对第3–6节、表5/6及第7节局限。 HF Daily Papers收录日期为10月21日，首次提交为10月20日。"
>}}

**一句话总结：** 用跨视角共享的持久3D点轨迹约束未来视频，再把同一表征扩展到机器人动作。

**研究问题：** 多相机视频可能各自逼真，却不描述同一个运动场景。相同物理点的未来位置可否成为跨视角的共同监督？

**核心方法：** VPM在预训练生成骨干上加入相机条件多视角处理和轨迹预测头，以视频历史和语言共同预测未来帧与3D点运动。VPM-Data提供同步多视角视频和持久轨迹；动作扩展将机器人动作作为额外token，与视频共同去噪。轨迹头的中间表征还被后续视频块使用，使几何监督影响生成过程。

**技术亮点：** 点身份跨视角保持一致，比每帧独立深度多了时间对应关系；对照VPM（V）与VPM（V+T）保持相同训练预算，以检验轨迹监督贡献。

**实验结果：** 表5比较有无轨迹监督的动作模型。三项真机pick-and-place每项24次，Banana任务由 **58.3%升至79.2%**，Cup由64.6%升至70.8%，Cube由43.8%升至54.2%；对应VPM（V+A）与VPM（V+T+A），不能把其中单项差值写成全部任务平均。该控制扩展在DROID的89K轨迹子集上训练，和视频生成基准的设定不同。

**应用场景 / 方向联系：** 适合多视角世界模型、4D动态预测、几何监督与动作学习融合。

**研究价值与局限：** 把“同一个物理点”作为预测接口很有说服力。但轨迹只覆盖机器人和标注对象，未覆盖全场景、衣物和头发独立运动；推理需要已知相机内外参，多视角token数也会增加计算成本。

---

### AgenticRoboRL: Bringing Coding-Agent Post-Training to Agentic Robotics

{{< paper-meta
  authors="Xinxin Liu、Bingxin Xu、Wenrui Bao、Ming Li 等；University of Central Florida、University of Southern California、Michigan State University"
  source="arXiv"
  date="2026-10-20 17:41 UTC · v1"
  arxiv="2610.28589"
  arxivURL="https://arxiv.org/abs/2610.28589"
  directions="机器人Agent、规划器后训练"
  note="核对训练配方与表1/2；SFT、RL收益与不同harness结果分开。"
>}}

**一句话总结：** 固定低层执行系统，通过SFT与多轮RL提高机器人规划器自身能力。

**研究问题：** 机器人Agent的改善常来自更强闭源模型或额外记忆。能否训练较小规划器学会更有效地调用现有执行接口？

**核心方法：** AgenticRoboRL用harness-specific adapters把规划交互与任务结局连接到共同训练流水线，先在成功轨迹上SFT，再用多轮RL优化。执行组件保持固定，分别覆盖VLA技能调用与控制代码生成。对教师依赖记忆、学生无法访问的信息，采用重写和过滤等处理。

**技术亮点：** 把高层模型后训练与底层技能学习分离，为改进来自何处提供更清楚的对照；它仍依赖成功教师轨迹和可执行反馈，不是没有先验的自主发现。

**实验结果：** 表1中同一RPent harness和冻结VLA下，9B规划器在LIBERO-PRO由 **18.1%经SFT升至65.1%**，再经RL升至 **71.0%**；RL增益为5.9个百分点，而非全部52.9个百分点。无需额外训练，LIBERO-Plus达到72.2%。另一代码生成harness CaP-X为 **2.7%到28.5%**，说明跨接口有效但绝对能力仍有差距。Codex带记忆的72.1%是不同配置的参考，不是严格同信息条件对照。

**应用场景 / 方向联系：** 适合机器人规划器后训练、工具调用RL和开源小模型替代高成本规划端。

**研究价值与局限：** 结果支持训练规划端而不只改外部脚手架。不过主要证据来自仿真基准，教师、SFT数据和任务奖励都影响迁移；不能由规划器成功率直接推断实机安全性或低层接触控制能力。

---

### Learning Adaptable Dexterous Skills via Hybrid Dexterous Mimicking

{{< paper-meta
  authors="Yuxuan Kuang、Jiashun Wang、Yixuan Sun、Yufei Ye 等；Carnegie Mellon University、NVIDIA"
  source="arXiv"
  date="2026-10-20 17:59 UTC · v1"
  arxiv="2610.28628"
  arxivURL="https://arxiv.org/abs/2610.28628"
  directions="灵巧操作、模仿先验、强化学习"
  note="核对第3–4节、表1/2及附录H；tracking progress不等于完整成功率。"
>}}

**一句话总结：** 用动作追踪与偏离参考的目标到达两类并行环境，把几秒人类动作变成可调整的灵巧技能。

**研究问题：** 纯追踪易过拟合一条动作，纯目标RL又可能学到不自然的手指策略。如何同时保留人类先验和对新物体位姿的适应？

**核心方法：** AdaDex的Hybrid Dexterous Mimicking让共享策略同时在两群环境训练：追踪环境提供稠密人类参考监督，泛化环境扰动初始状态和目标，并以稀疏物体成功奖励训练。策略以物体/腕部当前和目标位姿、形状和本体状态为条件；参考可来自mocap或视频HOI重建。

**技术亮点：** 同一个技能既学“怎样动”，也学偏离演示后的恢复与目标变化。少量人类片段不等于少量总训练，能力仍依赖大规模并行仿真RL和几何状态。

**实验结果：** 定量协议含12个GRAB对象，每对象一条训练参考与两条相似未见参考，每条评128次rollout。未见动作上的tracking progress为 **80.02%**，仅追踪、去掉泛化环境的消融为 **31.75%**；这里是首次失败位置占完整片段的比例，**不是完成整段的成功率**。真机示例包含开环重放与闭环30 Hz控制，后者依赖物体mesh及视觉位姿估计，不能一概写成无状态感知的迁移。

**应用场景 / 方向联系：** 适合功能抓取、手内重定向与动态交接，以及高层Agent调用低层灵巧技能。

**研究价值与局限：** 混合监督缓解追踪与泛化的取舍。附录H明确当前每物体、每参考轨迹训练一个策略；统一跨物体技能库和组合仍待研究，6DoF物体状态也难覆盖复杂铰接或可变形对象。

---


## 📊 今日研究趋势

**中间表示的价值要通过下游效果检验。** PhysCanvas的任务一致性、VPM的点对应关系、AEON的显式4D表示，各自把视觉生成与可验证结构连接起来。但相关性、几何质量和控制成功仍是不同指标，不能相互替代。

**效率与能力需要拆开归因。** MoDDiT节省FLOPs却可能在小batch变慢；AgenticRoboRL的大部分收益来自SFT而非RL；AdaDex的数据先验虽短，仍需要并行仿真训练。明确预算和对照，才能判断新机制贡献。

**可复用接口仍有条件。** 相机标定、物体位姿、任务相关奖励模型与逐技能策略都为实验提供了结构，也限定了迁移范围。下一步问题是这些接口怎样在更开放的数据与部署条件下继续有效。

## 🏆 最值得关注的 3 篇

1. **Physical Canvas**：把触觉一致性、策略评估和真机后训练连接成完整实验链，指标口径值得细读。
2. **MoDDiT**：动态计算设计简洁，尤其应结合FLOPs与实际吞吐的差异评估部署价值。
3. **Learning the 4D World through Point Trajectory Forecasting**：持久3D点同时服务跨视角生成和动作学习，提供了清楚的模态消融。

---

来源：arXiv原文、Submission history、HTML全文及Hugging Face Daily Papers。论文来自10月21日公告批次与近期HF列表，本期入选论文v1均为10月20日，并非10月22日首发；社区收录不代表会议接收。生成时间：2026-10-22 06:05:14（Asia/Singapore）。
