---
title: "AI每日精选 · 2026-11-16"
date: "2026-11-16T05:57:55+08:00"
draft: false
tags: ["ArXiv", "论文精选", "Agent", "训练效率"]
categories: ["ArXiv 每日精选"]
description: "六篇近期研究补遗，涵盖 Agent 经验学习与共享、决策可靠性、训练效率和具身数据构建。"
showToc: true
tocopen: true
arxiv_batch: "2026-11-13"
arxiv_counts: {"cs.CV": 326, "cs.RO": 164, "cs.AI": 537, "cs.LG": 611, "cs.GR": 9, "cs.MM": 6}
---

本期补遗六篇，补充 Agent 经验学习与共享、快速决策可靠性、基础模型训练效率及具身数据构建。值得比较的是：经验手册如何通过后续执行获得训练信号，高任务分是否意味着稳健决策，以及结构或优化器的省时省存结论究竟针对哪部分成本？这些论文均未在本博客收录，首次提交日期逐篇标明。

## 📄 论文精选

### Experience-Handoff Reinforcement Learning for Recursive Self-Improvement

{{< paper-meta authors="Doyoung Kim、Byeongguk Jeon、Kailin Zhang、Sherry Yang；纽约大学、KAIST AI" source="arXiv" date="2026-11-12 UTC · v1" arxiv="2611.16409" arxivURL="https://arxiv.org/abs/2611.16409v1" links="[{\"url\": \"https://huggingface.co/papers/2611.16409\", \"label\": \"HF Papers\", \"kind\": \"huggingface\"}]" directions="AI Agent、经验交接、强化学习" note="参见第 3–4 节、表 2、附录；v1 PDF。 HF 收录：2026-11-13；收录日期不等于首次提交。" >}}

**一句话总结**　用后续 rollout 的结果，训练模型如何交接可复用经验。

**研究问题**　Agent 每次试错产生的错误日志与经验，怎样不只写进提示，还能通过梯度学习如何向下一次尝试交接？

**核心方法**　固定 ACE 框架，让同一个模型承担 actor、reflector 和 curator；为候选经验手册运行后续 actor 尝试，用实际任务结果给反思与编辑行为分配训练信号。

**技术亮点**　经验条目不是仅由语言质量打分，而按它对未来执行的帮助优化；同时学习当前动作和交接给下一轮的上下文，不要求为自由形式经验训练独立奖励模型。

**实验结果**　表 2 在等训练计算、每任务三次 actor 尝试的 RSI@3 设置下，ACE-RL 的 AppWorld/MiniSWEBench 测试奖励为 0.667/0.340，GRPO 检查点在同一 ACE 框架下为 0.597/0.260。另列的 pass@3 不使用框架，不能与 RSI@3 混为同一指标。

**应用场景 / 方向联系**　适合自动化科研、编码 Agent 与可学习记忆整理，尤其值得借鉴以未来 rollout 评价经验产物。

**研究价值与局限**　自改进发生在固定 scaffold 和任务局部手册内，不等于系统可无限改写架构。收益依赖可重复执行和任务奖励，反思、整理及评估新手册均增加训练成本；对开放环境和长周期迁移还需验证。

### SO-Arena: Benchmarking the Capability Spectrum and Reliability of System One Models

{{< paper-meta authors="Lichen Li、Ziping Dong、Sicheng Feng、Qi Li、Xinchao Wang" source="arXiv" date="2026-11-11 UTC · v1" arxiv="2611.15777" arxivURL="https://arxiv.org/abs/2611.15777v1" links="[{\"url\": \"https://huggingface.co/papers/2611.15777\", \"label\": \"HF Papers\", \"kind\": \"huggingface\"}]" directions="快速决策、Agent 评测、可靠性" note="参见第 3–4 节、表 2、图 6。 HF 收录：2026-11-13；收录日期不等于首次提交。" >}}

**一句话总结**　将快速决策的能力覆盖和决策可靠性分开评价。

**研究问题**　直接输出类型化决策的 System One 模型，即使平均分高，是否也能应对选项变化和无正确答案？

**核心方法**　跨 11 个领域、五类能力建立可核验任务，分开评价任务成绩、选项次序稳定性和正确选项缺失时的识别能力；部分任务在可执行工具与网页环境中完成。

**技术亮点**　不再将快决策归结为一个准确率：用受控选项集变化和 null discrimination 检查相同问题的决策是否自洽，并与显式推理模型比较领域差距。

**实验结果**　共评测 21 个模型；可靠性分析针对其中 18 个 System One 模型。论文报告任务成绩最高的 System One 模型在可靠性上仅列第七；最可靠的两个模型在任务成绩中为第八和第六。领域难度分级并未跨领域校准，不宜直接把各领域的“困难”当作相同难度。

**应用场景 / 方向联系**　适合工具路由、动作选择和低延迟推理的模型选型研究，提醒同时考察覆盖范围、延迟与失效方式。

**研究价值与局限**　排名依赖选定领域、聚合权重、模型版本与协议，不能视为永久能力序列；人工参考检查降低标签问题，但有限沙箱和选项扰动仍不覆盖真实任务的全部失效。

### On the Design of Hyper-Connections: Simplification, Stability, and Scalability

{{< paper-meta authors="Xiangdong Zhang、Xiaohan Qin、Sunan Zou 等" source="arXiv" date="2026-11-04 UTC · v1" arxiv="2611.05984" arxivURL="https://arxiv.org/abs/2611.05984v1" links="[{\"url\": \"https://huggingface.co/papers/2611.05984\", \"label\": \"HF Papers\", \"kind\": \"huggingface\"}]" directions="基础模型架构、训练效率、稳定性" note="参见第 3–6 节、图 3、表 4。 HF 收录：2026-11-13；收录日期不等于首次提交。" >}}

**一句话总结**　保留读写门控并共享状态访问，简化扩展残差连接。

**研究问题**　扩展残差流的 Hyper-Connections 中，哪些连接机制真正改善学习，哪些主要增加数据搬运成本？

**核心方法**　分别消融读写门控与残差混合，保留有效的可学习门控而移除混合；通过共享组入口状态、批量读取和延迟写回，减少多层重复访问扩展残差流。

**技术亮点**　共享的是门控输入而非所有层参数，层特定映射仍保留；标量校正保持前序子层输出贡献。它同时简化架构与执行路径，而非单纯减少算术量。

**实验结果**　在最大测试规模，额外端到端训练时间由 7.0% 降至 2.4%，均相对普通残差基线。30B MoE 的表 4 中，SimpleHC 与 mHC 验证损失均为 1.561，普通残差为 1.579；MMLU 为 68.6 对 67.7，但并非所有下游项目都更高。

**应用场景 / 方向联系**　适合研究 Transformer 残差结构、内存带宽与大规模训练系统协同，阅读时可分开看组件消融和融合实现。

**研究价值与局限**　首次提交为 11 月 4 日，本期作为近期补遗。平滑梯度和压力测试是所用模型及训练设置的经验证据，不是任意深度的稳定性定理；执行节省也依赖共享访问与内核实现。

### Factored One-sided Adam-Moment for Practical and Scalable SOAP

{{< paper-meta authors="Jaemyung Yu、Byeongho Heo、Sangdoo Yun、Dongyoon Han；NAVER AI Lab" source="arXiv" date="2026-11-12 UTC · v1" arxiv="2611.16905" arxivURL="https://arxiv.org/abs/2611.16905v1" links="[{\"url\": \"https://huggingface.co/papers/2611.16905\", \"label\": \"HF Papers\", \"kind\": \"huggingface\"}]" directions="优化器、训练效率、二阶近似" note="参见第 3–6 节、图 1、表 1–2。 HF 收录：2026-11-13；收录日期不等于首次提交。" >}}

**一句话总结**　以单侧预条件和因子化二阶矩降低 SOAP 的实现成本。

**研究问题**　SOAP 的双侧预条件和稠密旋转二阶矩代价高，能否保留其收敛收益而减少状态与分解开销？

**核心方法**　FOAM 仅保留输入侧预条件，省去输出侧 Kronecker 因子及一次特征分解；再用行列统计近似旋转空间的二阶矩。

**技术亮点**　推导精确性依赖 K-FAC/Fisher 与输出曲率对角等条件；论文同时检查近似偏差和关键投影层，而非把实际梯度一律当作满足假设。

**实验结果**　主要预训练对照覆盖 124M、350M、760M。760M 三种子实验中，FOAM/SOAP 最终损失为 2.796/2.791；FOAM 到达 AdamW 该规模最终损失需要 10.53 小时，AdamW 为 10.55 小时。论文报告矩阵参数优化器状态约为 SOAP 一半，这不是总训练显存减半。

**应用场景 / 方向联系**　适合生成与语言模型的训练预算研究，重点是把每步收敛、状态规模和墙钟时间一起比较。

**研究价值与局限**　精确恢复关系有条件，近似对 key projection 相对较弱；嵌入和 lm-head 等仍由 AdamW 更新。GPT-2 量级结果不能证明前沿规模收益，预条件因子跨设备分片尚待完善。

### Ropedia Xperience 2: A Gold Standard for Scaling Physical AI Environments and Behaviors

{{< paper-meta authors="Ropedia Research Team" source="arXiv" date="2026-11-12 UTC · v1" arxiv="2611.17060" arxivURL="https://arxiv.org/abs/2611.17060v1" links="[{\"url\": \"https://huggingface.co/papers/2611.17060\", \"label\": \"HF Papers\", \"kind\": \"huggingface\"}]" directions="具身数据、3D 环境、仿真与行为复用" note="参见第 2–5 节、数据统计与附录 B。 HF 收录：2026-11-13；收录日期不等于首次提交。" >}}

**一句话总结**　成对采集公制场景与第一视角行为，支持机器人数据复用。

**研究问题**　如何同时收集有公制空间背景的环境和人类行为，让同一次采集可用于机器人学习及闭环仿真？

**核心方法**　单操作员先扫描环境，再用 HOMIE 头戴设备记录任务；流水线重建网格与 3DGS、估计相机及人体动作，并将第一视角轨迹注册到扫描场景。

**技术亮点**　环境和行为成对采集，再分别用于可交互场景转换、人类动作重定向、虚拟遥操作和自动长轨迹生成；质量检查和注册记录支持筛选与后续复用。

**实验结果**　发布扫描部分含 1,589 个场景；更广采集清单覆盖 596 处地点、74 类任务、4,230 条上传记录，共 131 小时。上传记录数不代表所有样本均已完成处理或成功注册，不能直接写成同等数量的高质量配对机器人轨迹。

**应用场景 / 方向联系**　适合真实到仿真、具身预训练、行为重定向及世界模型数据工程，为环境/行为规模实验提供资源基础。

**研究价值与局限**　论文展示采集与复用路径，尚未建立完整的能力缩放规律。短范围或俯视记录约束不足，单变换无法修正局部 SLAM 漂移；发布质量等级也不表示每个扫描通过所有检查。

### Who Remembers What? Multi-Granularity Memory Extraction for Multi-User, Multi-Agent Interaction

{{< paper-meta authors="Yunzhe Wang、Mesut Erhan Unal、Sheng Zhang 等；AWS Agentic AI、南加州大学等" source="arXiv" date="2026-11-07 UTC · v1" arxiv="2611.10439" arxivURL="https://arxiv.org/abs/2611.10439v1" links="[{\"url\": \"https://huggingface.co/papers/2611.10439\", \"label\": \"HF Papers\", \"kind\": \"huggingface\"}]" directions="Agent 记忆、经验共享、个性化" note="参见第 3–5 节、表 2、局限与伦理段落。 HF 收录：2026-11-13；收录日期不等于首次提交。" >}}

**一句话总结**　为不同用户和 Agent 的经验确定收益对象与共享范围。

**研究问题**　多个用户与异构 Agent 共享经验时，哪些教训应私有、哪些可以跨用户复用？

**核心方法**　MixUA 从轨迹提取经验，按用户—Agent 对、用户、Agent 和全局四种作用域存放；结合收益对象与可披露信息决定放置，再用周期性 store review 修订归属。

**技术亮点**　将“这条经验对谁有用”和“谁可以看到”作为独立问题，保留来源，并用 CrossLearnBench 同时评价效用、偏好保持和已植入信息的跨作用域泄漏。

**实验结果**　主要设置含五个合成用户、七种 Agent 配置。论文报告最高约 16 个百分点的无记忆基线增益；此前无人尝试的任务上为 10.1 个百分点，单全局记忆为 5.5。最高偏好保持约 90%，受限作用域的已植入信息探针泄漏不超过 0.02%；这些是具体实验中的不同指标，不保证同一设置同时达到所有最优值。

**应用场景 / 方向联系**　适合多研究助手、多角色工作流和长期个性化系统，补充上一期 HiVe-Mem 对“取哪些证据”的研究，转向“证据应由谁共享”。

**研究价值与局限**　用户和私人信息全部合成，低探针泄漏不是形式隐私保证。四作用域不能自然表达团队层级或任意共享子集；真实用户同意、删除、恶意经验防御与大规模写入成本均未充分验证。

## 📊 今日研究趋势

经验的价值可以分成两个问题：ACE-RL 学习哪种交接产物帮助下一次执行，MixUA 决定这份经验应分享给谁。二者都需要把最终任务收益与中间产物的质量联系起来。训练效率研究则强调分开核算：SimpleHC 减少重复残差状态访问，FOAM 减少优化器状态和分解成本；这些局部收益不自动等于全部显存或训练时间同比缩减。

## 🏆 最值得关注的 3 篇

1. **ACE-RL**：以未来执行结果训练反思与经验整理，注意固定框架及多次尝试的评估口径。
2. **FOAM**：把理论近似条件、最终损失和墙钟时间一起展示，适合审视优化器工程收益。
3. **Ropedia Xperience 2**：公制场景与行为共同采集的数据入口，使用前需区分上传、处理、注册和发布状态。

两个发现来源最新一期仍为 11 月 13 日，本期采用近期未收录论文补遗。首次提交日期已由 arXiv Submission history 与 API 核对；方法、实验和限制对照 v1 HTML，ACE-RL 使用 v1 PDF。

生成时间 2026-11-16T06:07:55+08:00（Asia/Singapore）。
