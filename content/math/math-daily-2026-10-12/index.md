---
title: "Math 每日速递 · 2026-10-12"
date: 2026-10-12T00:25:00+08:00
draft: false
description: "首期出刊：arXiv math.PR 2026-10-09（Fri, 9 Oct 2026）公告批次 45 篇 + PTRF / Annals of Probability 近期上线，候选池 105 篇，精选 6 篇，全部命中四条关注主线中的两条 —— branching process 主线 3 篇（Joelle Ishak 的临界分支随机游动香肠容量定量估计；Xinxin Chen / Shen Lin 在 PTRF 上按三个维数区间给出临界分支随机游动占位时的 Yaglom 型极限定理，回答 Le Gall–Merle 提问；Bansaye–Berah–Cloez 把超临界分支过程的强律推广到无穷维 Kesten–Stigum 情形），self-interacting random walk 主线 3 篇（Sabot–Tarrès 给出 ⋆-VRJP 的 Yaglom 可逆马氏跳跃过程混合表示与随机 Schrödinger 算子表示；Shuo Qin 证明 Couzinié–Hirsch 弱强化 Pólya 瓮 homogenization 猜想，含 MATRIX 报告的非一致激发率版本；Arvind Singh 证明径向 excited random walk 的球形 shape theorem，确认 Kozma (2007) 猜想）。非马氏过程与 stochastic flow 两条主线本期无新作，按宁缺毋滥原则不凑数。"
tags: ["math.PR", "branching process", "branching random walk", "self-interacting random walk", "reinforced random walk", "Yaglom theorem", "Annals of Probability", "PTRF"]
categories: ["Math"]
showToc: true
tocopen: true
---

> 📅 本期覆盖 arXiv math.PR **Fri, 9 Oct 2026** 公告批次（该批次共 45 篇），并同步扫描 *Probability Theory and Related Fields*（PTRF，CrossRef 0178-8051，近 30 条）与 *Annals of Probability*（CrossRef 0091-1798，近 30 条）。候选池合计 **105 篇**。
>
> 这是 Math 栏目的**第一期**：历史基线为空，去重自检返回 `arXiv IDs = 0 / DOIs = 0 / titles = 0`，属首次运行的正常状态。数据源方面，*Annals of Mathematics* 的 WordPress RSS 本期返回 0 条，AoP future papers（imstat.org）仍被 Anubis 反爬拦截，两者均不阻塞出刊。
>
> 本期 6 篇全部落在两条主线上：**branching process 主线 3 篇**（香肠容量 / Yaglom 型极限定理 / 无穷维 Kesten–Stigum 强律），**self-interacting random walk 主线 3 篇**（⋆-VRJP / 弱强化 Pólya 瓮 / 径向 excited random walk）。**非马氏过程**与 **stochastic flow** 两条主线本期候选池中没有真正命中的新作（既无 Volterra / 记忆核 / 分数阶反常扩散类的非马氏动力学，也无 flow of diffeomorphisms / isotropic stochastic flow 类结果），按宁缺毋滥原则不收泛概率论文凑数。

---

## 📄 今日论文

### Capacities and Hitting Times for Simple and (critical) Branching Random Walk Sausages

**链接：** https://arxiv.org/abs/2610.12160 ｜ **arXiv：** arXiv:2610.12160v1 [math.PR]（2026-10-08）

**作者 / 机构：** Joelle Ishak（论文未在 arXiv 页面标注机构）

**一句话总结：** 对有限集 A 沿简单随机游动或临界分支随机游动（critical BRW）轨迹搬运所得的「香肠」（sausage，即 Minkowski 和 `ℛ + A`），给出高维容量的**非渐近**定量估计，并由此读出这些 Minkowski 和击中远处有限集的概率。

**研究问题：** 给定含原点的有限集 `A ⊆ ℤ^d` 与随机点集 `ℛ`，其香肠为 `ℛ + A := {x + a}`. 目标是**非渐近地**（而非只在极限意义上）回答：香肠的容量如何随 `ℛ` 的规模、`A` 的势论大小变化。文中 `ℛ` 取三类：简单随机游动前 n 步值域 `𝒮[0,n]`；各行（ancestral line）首次退出球 `B_R` 即停所得的值域 —— 简单游动的 `𝒮(B_R)` 与临界 BRW 的 `𝒯_c(B_R)`；以及上述值域之间的 Minkowski 和。

**主要结果：**
- **定理 1.1(i)**：设 `A` 有限非空，`N ≥ 2`，`d ≥ 2N+1`。若 `n ≥ 2·diam(A)²`，则 `E[Cap_{d-2(N-1)}(𝒮[0,n] + A)] ≍ n·Cap_{d-2N}(A)`；若 `R ≥ 2·diam(A)`，则 `E[Cap_{d-2(N-1)}(𝒮(B_R) + A)] ≍ R²·Cap_{d-2N}(A)`。
- **定理 1.1(ii)**：设 `N ≥ 3`，`d ≥ 2N+1`，对充分大的 `R`，`E[Cap_{d-2(N-2)}(𝒯_c(B_R) + A)] ≍ R²·Cap_{d-2N}(A)`。
- **注 1.2**：(ii) 的下界只需线性条件 `R ≥ cN·diam(A)`；上界要求 `R ≥ C_N·diam(A)^{a_{N-2}}`，指数 `a_m` 由文中的迭代论证给出，`N = 3` 时 `a_1 = 3`。
- **推论 1.5**（由 (1.5)(1.6) 取 `N = 3`，故要求 `d ≥ 7`）：对任意 `‖z‖ ≥ 2R` 且 `R ≥ C·diam(A)³`，有 `P(z + 𝒯_c ↔ 𝒮(B_R) + A) ≍ P(z + 𝒮 ↔ 𝒯_c(B_R) + A)` —— 在击中概率层面，简单随机游动与临界分支随机游动**可以互换**：把其中一个停在球内、让另一个跑完整值域，概率同阶。

**方法与证明思路：**
- 以「**击中概率 ↔ 容量**」的经典对应作转换枢纽：先把普通随机游动、临界 BRW 以及它们的 Minkowski 和各自的击中概率翻译成相应阶数的容量，再统一估计。
- 把游动按「位移首次超过给定半径即停」切成片段，完成片段的数目构成更新过程；单个停走片段的容量借 Asselah–Okada–Schapira–Sousi（*PTRF* 191(3–4) (2025), 1289–1322）关于随机游动值域 Minkowski 和的结果来控制，迭代即得 Proposition 2.1。
- 处理临界 BRW 的核心新工具是**环形分解（annular decomposition into successive waves）**：把 BRW 按到原点的距离切成逐层波次，证明相邻波次贡献的几何衰减（第 6.1–6.2 节），再把各波容量的贡献加总。

**技术亮点：**
- 估计是**非渐近**的：常数对 `diam(A)`、维数与 `N` 的依赖可显式追踪，而不是只给出 `n → ∞` 的首项；
- 环形分解被作者明确点出「may have further applications」，是本篇重要的工具性贡献；
- 推论 1.5 揭示了一种对称性：simple random walk 与 critical BRW 在击中概率层面互为替身。

**与关注领域的关联：** 属 **branching process 主线**，且正落在近年活跃的 branching capacity 链路上 —— 文中反复用到 `BCap(A) ≍ Cap_{d-4}(A)` 这一容量可比性判据。

**研究价值：** ⭐⭐⭐⭐（4/5）— 把 sausage 容量的估计从「随机游动值域」推进到「分支随机游动值域及其 Minkowski 和」，且坚持非渐近形式。局限在于 (ii) 的上界需要一个依赖 `N` 的幂次条件 `R ≥ C_N·diam(A)^{a_{N-2}}`，该指数来自文中的迭代论证，作者并未声称最优。

---

### Yaglom theorem for critical branching random walk on ℤ^d

**链接：** https://doi.org/10.1007/s00440-026-01525-6 ｜ **DOI：** 10.1007/s00440-026-01525-6 ｜ **预印本：** https://arxiv.org/abs/2512.24047

**作者 / 机构：** Xinxin Chen（北京师范大学数学科学学院 School of Mathematical Sciences, Beijing Normal University）、Shen Lin（法国 CNRS / LPSM, Sorbonne Université, Université Paris Cité, Paris）；两位作者贡献相同

**发表信息：** *Probability Theory and Related Fields*，2026-07-27 在线发表，正文 1–78 页；收稿 2026-01-09，接收 2026-07-19

**一句话总结：** 让临界分支随机游动从远点 `x` 出发并条件于「击中某个紧集 K」，给出它在 K 中累计占位时（occupation time）随 `‖x‖` 增长的渐近行为与极限分布，回答了 Le Gall 与 Merle 提出的一个问题。

**研究问题：** 设 `Z_𝕋(K)` 为整棵谱系树上落进 K 的个体总数（占位时），`L_K` 为首批抵达 K 的「先驱」（pioneers）个数，后者构成一条停止线（stopping line）。从远处 `x` 出发的临界 BRW 命中有界集的概率本就很小（由 branching capacity `BCap(K)` 控制），那么在**条件命中**之后，`Z_𝕋(K)` 到底有多大、极限分布是什么 —— 这正是经典 Yaglom 定理在「距离 → ∞」而非「世代 → ∞」上的对应物。

**主要结果：**
- **定理 1.1（d = 4，临界维）**：在跳跃分布 `μ` 对称且有有限支集的假设下，条件于命中后成立联合收敛：`(L_K/Cap(K), Z_𝕋(K)/|K|)` 经 `1/(2σ²·c_4·log 𝒥(x))` 归一化后收敛到 `(1,1) × Y`，其中 `Y` 是参数为 1 的指数随机变量，常数 `c_4 = 1/(8π²·√det Γ)`。
- **定理 1.3（d ≥ 5）**：在尾部条件 `μ({‖x‖ > r}) < C·r^{-d}` 下，`(L_K, Z_𝕋(K))` 的条件分布收敛到一个非退化极限 `(Y_{d,K}, Z_{d,K})`，其分布同时依赖于维数、K、后裔分布与跳跃律（文中 Remark 4 给出完整刻画）；此时 K 内各点的占位不再同分布，与 `d = 4` 的情形形成鲜明对比。
- **定理 1.4（d ≤ 3）**：`Z_𝕋(K)/(|K|·𝒥(x)^{4-d})` 依分布收敛到 `(σ²/(4√det Γ))·d^{(4-d)/2}·ℓ_+`，其中 `ℓ_+` 由布朗蛇（Brownian snake）在无穷游程测度下的占位密度给出；作者验证这与 Le Gall–Merle 关于超布朗运动的结果至多相差一个乘法常数。
- 因此占位时的阶为 `‖x‖^{4-d}`（d ≤ 3）、`log‖x‖`（d = 4）、`O(1)`（d ≥ 5） —— 与 `d = 4` 作为临界维的经典图景完全吻合。
- 上述结论回答了 **Le Gall 与 Merle**（*Electron. Commun. Probab.* 11 (2006), 252–265）提出的问题。

> 记号说明：`𝒥(x) := √(x·Γ^{-1}x/d)`，`Γ` 为跳跃分布 `μ` 的协方差矩阵；`σ²` 为后裔分布的方差。

**方法与证明思路：**
- 预备工具是**换测度与 spine 分解（spinal decomposition）**（第 2.1 节），用以把条件事件 `{Z_𝕋(K) ≥ 1}` 的复杂性落到脊（spine）结构上；
- `d = 4` 情形的关键一环是对 `L_K` 与 `Z_𝕋(K)` 的**二阶（L²）估计**（第 4.1 节），再配合「最近共同祖先」分解与概率测度上的 Wasserstein 距离处理完成 Yaglom 型极限（第 4.2 节）；
- 三个维数区间分别处理，正文顺序为「§3 d ≥ 5 → §4 d = 4 → §5 d ≤ 3」，其中 `d ≤ 3` 的极限对象直接借用布朗蛇的占位密度理论。

**技术亮点：**
- 把 Yaglom 型极限定理从「世代 → ∞」搬到了「空间距离 → ∞」，并覆盖全部三个维数区间；
- `d ≥ 5` 的极限不再是简单的指数分布，而依赖于 K 与跳跃律 —— 这是高维情形真正的难点所在；
- 与超布朗运动一侧的已知结果实现对接（在相差乘法常数的意义上一致）。

**与关注领域的关联：** 属 **branching process 主线**，切中的是分支过程与分支随机游动的 Yaglom 型极限，同时串联起 branching capacity、谱系 / spine 方法这一整条技术链。

**研究价值：** ⭐⭐⭐⭐⭐（5/5）— 一篇 78 页长文，把一条由他人提出的开放问题按维数完整关闭，且三条维数途径各自给出了可核验的具体形式。值得一提的是它对 `d = 4` 给出了显式常数 `c_4 = 1/(8π²·√det Γ)`，这在同类极限定理中并不常见。

---

### Strong law of large numbers and L log L condition for supercritical branching processes

**链接：** https://doi.org/10.1007/s00440-026-01524-7 ｜ **DOI：** 10.1007/s00440-026-01524-7 ｜ **预印本：** https://arxiv.org/abs/2503.03324

**作者 / 机构：** Vincent Bansaye（CMAP, INRIA, École polytechnique, Institut Polytechnique de Paris, Palaiseau）、Tresnia Berah（帝国理工学院 Department of Mathematics - Statistics Section, Imperial College London）、Bertrand Cloez（MISTEA, Université de Montpellier, INRAE, Institut Agro, Montpellier）

**发表信息：** *Probability Theory and Related Fields*，2026-08-01 在线发表，正文 1–44 页；收稿 2025-06-03，接收 2026-07-18

**一句话总结：** 在一般可测状态空间上的**结构化种群**分支过程中，于「再归一化半群依加权全变差范数收敛」的假设下，用 `L log L` 条件证明了再归一化经验测度的强收敛与相应鞅极限的非退化 —— 一条无穷维版本的 Kesten–Stigum 强律。

**研究问题：** 经典结论是：超临界 Bienaymé–Galton–Watson 过程中，鞅 `W_n = Z_n/m^n` 的极限非退化的充要条件是繁殖律满足 **`L log L` 矩条件**（Kesten–Stigum）。有限多型时可用 Perron–Frobenius 得到 `(λ, h, γ)` 三元组。但当每个个体的类型（trait）取值于一般可测状态空间时，这套有限维工具不再可用 —— 本文要问的正是：**无穷维情形下的 `L log L` 型强律该如何陈述、条件又该是什么。**

**主要结果：**
- 作者聚焦于**超临界常返（supercritical recurrent）**情形：种群可以存活并增长，且性状分布收敛到一个概率测度；此时过程应由一阶矩半群的第一特征值问题的**正三元组**驱动。
- 在「再归一化半群**依加权全变差范数收敛**」的假设下，证明了：
  - 再归一化经验测度的**强收敛**（即结构化分支过程的强大数律）；
  - 相应鞅极限的**非退化性**。
- 收敛是在 `L log L` 条件下取得的，这给出了一条**无穷维 Kesten–Stigum 结果**，并且放宽了 Asmussen 与 Hering（1976）工作中要求的一阶矩半群一致收敛。
- 三类应用实例：带吸收的分支扩散（absorbed branching diffusion）、house-of-cards 模型、若干生长–碎裂（growth-fragmentation）过程。

**方法与证明思路：**
- 技术路线结合了**一族鞅（families of martingales）**、**压缩性质（contraction properties）**，以及 Asmussen–Hering 的**截断方法**（truncation procedure）；
- 正文结构是「§2 离散时间的一般研究（构造与定义 → 压缩与 `L log L` 矩 → 鞅族 → 定理证明与补充）→ §3 连续时间的收敛与应用」，两类时间设定分别处理。

**技术亮点：**
- 把有限维矩阵特征值工具换成**半群的加权全变差压缩**，从而一次性覆盖无限维类型空间；
- 明确指出自身假设比 Asmussen–Hering 的一致收敛条件弱，统一了部分文献结论并覆盖了新情形（house-of-cards、生长–碎裂）；
- 离散时间与连续时间双轨并进，应用部分逐一给出具体模型的性状动力学、分支机制以及非爆炸性与生成元的验证。

**与关注领域的关联：** 属 **branching process 主线**的核心位置 —— `L log L` / Kesten–Stigum 是分支过程全部强律类结果的基点，本文把它推广到结构化与无穷维。

**研究价值：** ⭐⭐⭐⭐（4/5）— 属于「把教科书定理认真做好推广」那类工作：条件从一致收敛弱化为加权全变差收敛，适用范围从有限型拓展到一般性状空间，并给出三个不同来源的应用实例。对实用者的意义在于：判断一个结构化种群模型能否用强律，现在只需验证「加权全变差收敛 + `L log L` 矩」这两件事。

---

### The ⋆-vertex-reinforced jump process

**链接：** https://doi.org/10.1214/25-aop1759 ｜ **DOI：** 10.1214/25-aop1759

**作者 / 机构：** Christophe Sabot（Université Claude Bernard Lyon 1, Institut Camille Jordan, CNRS UMR 5208）、Pierre Tarrès（NYU-ECNU Institute of Mathematical Sciences at NYU Shanghai）

**发表信息：** *The Annals of Probability*, Vol. 54, No. 4, pp. 1715–1771（2026-07-01）

**一句话总结：** 针对经典 VRJP 的**不可逆**推广 —— ⋆-VRJP（由 Bacallado、Sabot、Tarrès 于 2020 年引入）—— 给出它的混合表示（Yaglom 可逆马氏跳跃过程的混合）与随机 Schrödinger 算子表示。

**研究问题：** 经典 VRJP 的一个关键性质是**时间变换后可交换（exchangeable）**，这支撑了它身上诸多精确可算的性质。⋆-VRJP 是 Coppersmith–Diaconis ERRW 之 ⋆-ERRW 版本的连续时间对应物，而 `⋆` 版本是**不可逆**的（事实上是 Yaglom reversible）：时间变换后**不再可交换**，这一缺失带来了一系列新困难与新现象。本文要做的就是在不可逆设定下重建这套结构。

**主要结果：**
- **部分可交换性与混合表示**：通过对初始局部时做适当随机化，⋆-VRJP 在时间变换后变为**部分可交换（partially exchangeable）**；作者把「randomized ⋆-VRJP」表示为**一列 Yaglom 可逆马氏跳跃过程的混合**，且混合测度是**显式**的；并进一步证明**未随机化的 ⋆-VRJP 可写成一列条件马氏过程（conditioned Markov processes）的混合**。
- **随机 Schrödinger 算子表示**：给出 ⋆-VRJP 通过一个随机 Schrödinger 算子的表示。经典 VRJP 的对应表示在理解其渐近行为上极为有效，这里是它的 ⋆ 版本类比。
- 该构造建立在**顶点上 ⋆-对称函数与 ⋆-反对称函数空间之间若干新的、相当惊人的积分恒等式**之上；作者同时用随机 Schrödinger 算子刻画了 randomized ⋆-VRJP，从而以另一种更偏分析的方式重证了混合表示。
- 作者明确表示：与 VRJP 类似，随机 Schrödinger 算子表示及其配套恒等式是 ⋆-VRJP 的关键特征。

**方法与证明思路：** 期刊落地页（projecteuclid 有 Incapsula 反爬）无法取得细化证明步骤，摘要由 CrossRef 元数据获取；此处按摘要陈述，不作推断。

**技术亮点：**
- 在**不可逆**设定的自强化过程中恢复出可用的（部分）可交换结构 —— 这是本文最关键的一步；
- 混合测度显式可写，而非仅给出存在性；
- ⋆-对称 / ⋆-反对称函数空间上的积分恒等式本身具有独立于本文的价值。

**与关注领域的关联：** 属 **self-interacting random walk 主线**（顶点强化跳跃过程 / reinforced jump process），且与 ERRW–VRJP 这条「自强化过程可解结构」的脉络直接相连。

**研究价值：** ⭐⭐⭐⭐⭐（5/5）— ⋆-VRJP 是自强化过程里少数既精确可算又非可逆的模型；把它从「缺失可交换性」的困境里救回来，等于给不可逆强化过程这一类补上了最缺的工具。

---

### Homogenization of weakly reinforced Pólya urns on countable networks

**链接：** https://arxiv.org/abs/2610.11780 ｜ **arXiv：** arXiv:2610.11780v1 [math.PR]（2026-10-08）

**作者 / 机构：** Shuo Qin（北京雁栖湖应用数学研究院 Beijing Institute of Mathematical Sciences and Applications；清华大学丘成桐数学科学中心 Yau Mathematical Sciences Center, Tsinghua University）

**一句话总结：** 在一致有界度的可数图上，对**弱强化 Pólya 瓮**（`(W,A)`-reinforcement model / WARM 的图版本）证明 homogenization 猜想 —— 归一化边权几乎必然逐边收敛到一个与初值无关的确定性向量。

**研究问题：** WARM 由 van der Hofstad、Holmes、Kuznetsov 与 Ruszel 提出，原作讨论的是 `α > 1` 强强化区的平衡点稳定性与相变。Couzinié 与 Hirsch 转到可数网络、连续时间、单位初值与单位激发率，并猜想：在弱强化区 `α < 1` 内，任意一致有界度的可数图上都应有 homogenization —— 即存在唯一非消失均衡 `μ`，且 `X_t(e) → μ_e` 几乎必然。MATRIX 开放问题报告进一步给出带有**任意有界正激发率**的版本（不要求激发率有正下界）。本文就是要完整证明这一猜想。

**主要结果：**
- **定理 1.1（Homogenization）**：设 `G = (V,E)` 为可数连通单图，`1 ≤ deg(v) ≤ Δ < ∞`，各顶点配备独立的 Poisson 时钟，激发率 `p_v` 满足 `0 < p_v ≤ p* < ∞`，初权 `N_0(e)` 为确定性有限正值（无需一致有界）。则对任意强化指数 `α ∈ [0,1)`，极限方程存在**唯一非消失均衡 `μ`**，且对任意确定性有限正初权，几乎必然地对每条边 `e` 成立
  `lim_{t→∞} N_t(e)/t = μ_e`.
- 该均衡只依赖于图、激发率与 `α`，其坐标未必相等 —— 这就是「homogenization」在这里的确切含义；Proposition 2.2 给出 `μ` 关于激发率的显式上下界。
- 若图是每点度数为 `d`、激发率恒为 `p` 的正则图，则常向量 `μ_e = 2p/d` 即为均衡，定理 1.1 在此情形下显式识别出极限。作者同时指出 Angel、Hermon 与 Yao 用不同方法独立证明了 Couzinié–Hirsch 的 homogenization 猜想。

**方法与证明思路：**
- 极限对象是常微分方程 `ẋ_e = F_e(x) = -x_e + Σ_{v∈e} p_v·x_e^α / S_v(x)`（其中 `S_v(x) = Σ_{f∈E_v} x_f^α`）的均衡。
- 核心一步是为该方程建立 **Liouville 定理**：每一个有界正的**完全解（complete solution，在所有实数时间上有定义）**都等于那个唯一的非消失均衡。注意**仅有均衡唯一性并不足以**推出定理 1.1。
- Liouville 定理的证法是**对数范数比较（logarithmic-norm comparison）**：先用变量代换 `y_e = x_e^{1-α}` 消去强化项中的边因子；完全性给出对各顶点贡献的一致控制（即便激发率与坐标都缺乏正下界）；比较任意两个完全解并落到顶点方程上，此时「每条边对它的两个端点各贡献一次」使得**对角相互作用系数恰好等于该行非对角系数之和** —— 基于这一 row-sum balance 的上确界范数估计给出差在足够长区间上的衰减，再把它推向任意远的过去即得 Liouville 定理。
- 第二步是把瓮过程接到完全解上：先证明**持久性（persistence）** `liminf_{t→∞} X_t(e) > 0` 几乎必然（通过与纯生过程比较来覆盖更一般的情形），再用对数时间尺度的随机逼近论证完成任务。

**技术亮点：**
- 首次同时允许**任意有界正激发率（不需要正下界）**与**任意确定性有限正初权**；
- 证明用的是 Liouville 型而非 Lyapunov 型论证 —— 因为可数图上定义 Lyapunov 函数的那些和式未必收敛；
- row-sum balance 这一结构性巧合（边对每个端点各贡献一次）是整个比较论证的支点。

**与关注领域的关联：** 属 **self-interacting random walk 主线**（弱强化 Pólya 瓮 / 强化互动过程），并把 Couzinié–Hirsch 与 MATRIX 报告中的公开猜想一并解决。

**研究价值：** ⭐⭐⭐⭐（4/5）— 一个猜想的干净解决。方法论上更值得留意：用 Liouville 定理替代 Lyapunov 函数来处理无限图上随机逼近的极限集，这一招很可能移植到其他无穷维强化过程上。

---

### A shape theorem for a radially excited random walk in dimensions d ≥ 2

**链接：** https://arxiv.org/abs/2610.12138 ｜ **arXiv：** arXiv:2610.12138v1 [math.PR]（2026-10-07）

**作者 / 机构：** Arvind Singh（论文未在 arXiv 页面标注机构）

**一句话总结：** 对首次访问时的偏置以恒定强度 `β > 0` 指向原点的 **once-excited random walk**（ℤ^d, `d ≥ 2`），证明它是常返的，并建立**球形 shape theorem**：n 步后的痕迹渐近是一个以原点为中心的欧氏球，半径正比于 `n^{1/(d+1)}`，局部时则呈渐近锥形（conical）剖面。

**研究问题：** Excited random walk 由 Benjamini 与 Wilson 提出，原型中所有 cookie 偏置指向同一固定方向，已被证明在任意 `d ≥ 2` 下非常返且具有弹道行为。2007 年 Oberwolfach 研讨会的一次开放问题环节中，Kozma 讨论了另一种变体：**首次访问的偏置随位置而变、但始终指向原点**。他随后宣布这样的游动在任意维数下总是常返的，并猜想所访集合有极限形状、半径阶为 `n^{1/(d+1)}`。Kozma 的方法覆盖面更广，能处理偏置强度可变的内向 cookie，但**得不到 shape theorem**。本文换用另一套路子关闭了这个猜想。

**主要结果：**
- 模型：给定强度参数 `β > 0`，每点 `x` 处首次访问所用的概率分布 `q_x` 满足 `Σ_{e∈ℰ} q_x(e)·e = -β·n(x)`（`n(x) = x/|x|` 为径向单位向量），原点处取对称；此后访问该点的跳转为简单对称随机游动。`β ≤ 1/d` 时可由 `q_x(±e_i) = 1/(2d) ∓ βx_i/(2|x|)` 实现。
- **定理 2.1（Shape theorem）**：记 `v_d` 为单位欧氏球体积，令 `C_* := 2dβ·v_d/(d+1)`，`r_n := (n/C_*)^{1/(d+1)}`。则几乎必然地：
  - (i) 对任意 `ε ∈ (0,1)`，当 n 足够大时有 `D_{(1-ε)r_n} ⊂ A_n ⊂ D_{(1+ε)r_n}`（其中 `A_n` 为前 n 步的痕迹，`D_r := {x ∈ ℤ^d : |x| < r}`）；特别地 `#A_n ∼ v_d·r_n^d`，且 `max_{x∈A_n} |x| ∼ r_n`；
  - (ii) 局部时呈锥形，且成立一致逼近 `lim_{n→∞} (1/r_n)·sup_{x∈ℤ^d} |T_n(x) - 2dβ·(r_n - |x|)_+| = 0`；特别地每个固定点被访问无穷多次，故游动**常返**，且对任意固定 `x ∈ ℤ^d` 有 `T_n(x)/r_n → 2dβ`。
- 由此确认了 Kozma (2007) 关于该模型痕迹形状的猜想，并由 (ii) 顺带给出常返性的另一个证明。

**方法与证明思路：**
- 引入一族**由格林函数（Green functions）构造的、以 ℤ^d 为指标集的鞅**，把每个点的局部时与当前痕迹联系起来；证明鞅的涨落可以忽略，从而得到局部时与痕迹之间的一个近似确定性关系。
- 一个**刚性（rigidity）论证**说明这个关系只允许锥形的局部时剖面（Proposition 3.2），但尚不指定确切半径；再用一个**环形穿越估计（annulus-crossing estimate）**排除细长的突起，把锥的底半径等同于退出半径（Lemma 3.3）。
- 上述结果先对「停在退出大球的时刻」的游动证明，再转移回确定时间 n。

**技术亮点：**
- 与经典 excited RW 不同，这里没有「一个固定方向」的结构可以利用，靠的是径向对称性转化出来的格林函数鞅 + 刚性 + 环形穿越三件套；
- 给出的是局部时剖面的一致（sup 形式）逼近，比只给出体积 / 半径级别的结果强得多；
- 极限形状是显式的：球半径常数 `C_* = 2dβ·v_d/(d+1)` 完全由 `β` 与维数决定。

**与关注领域的关联：** 属 **self-interacting random walk 主线**（excited random walk / cookie random walk）；论文自己也点明，这类模型因其「non-Markovian dynamics and long memory」而极难处理 —— 这正好接到非马氏那条主线：这里非马氏性来自「是否首次访问」的记忆，本文的办法是用格林函数鞅把记忆结算成一步可算的量。

**研究价值：** ⭐⭐⭐⭐（4/5）— 解决了 Kozma 2007 年提出的一个猜想，且给出的是强形式（一致锥形局部时）。局限在于偏置要求「恰好径向、强度恒定」；原文明确指出 Kozma 的方法覆盖面更广（偏置可变的内向 cookie）但无 shape theorem，两者的互补关系值得留意。

---

## 📊 今日关注领域分布

**主线分布：branching process / branching random walk 3 篇，self-interacting random walk 3 篇，非马氏过程 0 篇，stochastic flow 0 篇。** 后两条主线本期候选池（105 篇）中没有真正命中的新作 —— 既没有 Volterra / 记忆核 / 分数阶反常扩散类的非马氏动力学，也没有 flow of diffeomorphisms、isotropic stochastic flow 或随机动力系统方向的新上线论文。按宁缺毋滥原则，这两条主线本期留空，不用泛概率论文（本期候选池中另有 transfer operator / random matrix / SPDE 抽样一类的工作，均属邻域之外）凑数。

另一个层面的共同点值得记录：**这 6 篇里有一半在处理「结构比看上去更受约束」这件事。** ⋆-VRJP 在不可逆设定下找回部分可交换性并落到马氏跳跃过程的混合；Pólya 瓮把随机逼近轨道压到一个 Liouville 定理所能锁定的确定性均衡；径向 excited random walk 用刚性论证把局部时剖面逼成唯一锥形；Yaglom 一文则借 spine 分解把条件结构降到单脊上。四条途径表面各异，手法却是同一种：**先找到一个能从外部锁死结构的量（混合测度 / Liouville 性质 / 格林函数鞅 / 脊分解），再回头推出原本不可直接计算的行为。** 与之对照，香肠容量一文走的是另一条路 —— 更新式分割 + 环形分解把贡献切成可加的层，属于「局部化 + 加和」而非「全局锁定」。

最后一点：**Yaglom 型结果这一支近期明显在升温。** 除本期的 PTRF 长文（7 月上线）外，同一批作者在 arXiv 上还有 2026-09 的相关工作（二维情形的局部存活概率与 Yaglom 极限定理），本期因超出 21 天抓取窗口未纳入；对这条线感兴趣的读者可以顺着一并读。

## 🏆 最值得精读的 1–2 篇

1. **Yaglom theorem for critical branching random walk on ℤ^d（PTRF）** — 一篇 78 页长文，按三个维数区间完整关闭了 Le Gall–Merle 提出的问题，且在每个区间都给出可核验的具体形式（d = 4 的显式常数、d ≥ 5 的非退化极限刻画、d ≤ 3 与布朗蛇占位密度的对接）。想进入临界分支随机游动与超布朗运动的交叉地带，这篇是目前最合适的入口。

2. **The ⋆-vertex-reinforced jump process（Annals of Probability）** — 如果你关心自强化过程的可解结构，这篇必读：它把「非可逆性」这个自强化过程里最麻烦的东西重新装进了随机 Schrödinger 算子与混合表示的语境，其中 ⋆-对称 / ⋆-反对称函数空间上的积分恒等式很可能在此后反复被引用。

---

*数据来源：arXiv math.PR 2026-10-09（Fri, 9 Oct 2026）公告批次（45 篇） · Annals of Mathematics RSS（本期 0 条） · Annals of Probability（CrossRef 0091-1798） · Probability Theory and Related Fields（CrossRef 0178-8051） | 生成时间：2026-10-12 00:30 (北京时间)*
