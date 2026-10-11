---
title: "Math 每日速递 · 2026-10-12"
date: 2026-10-12T04:08:00+08:00
draft: false
description: "arXiv math.PR 2026-10-09（Fri, 9 Oct 2026）公告批次 45 篇 + PTRF / Annals of Probability 近期上线，候选池 105 篇，精选 10 篇（00:30 首刊 6 篇 + 04:00 增补 4 篇）：branching process 主线 5 篇（Ishak 的临界分支随机游动香肠容量；Chen / Lin 按三个维数区间的 Yaglom 型极限定理；Bansaye–Berah–Cloez 的无穷维 Kesten–Stigum 强律；Zhu 在 ℤ^d、d ≥ 5 上建立 branching capacity 并给出访问概率渐近与命中点条件分布；Hartung–Louidor–Wu 给出分支布朗运动极值与簇水平集质量的涨落），self-interacting random walk 主线 4 篇（Sabot–Tarrès 的 ⋆-VRJP 混合表示；Qin 证明弱强化 Pólya 瓮 homogenization 猜想；Singh 的径向 excited random walk 球形 shape theorem；König–Pétrélis–Soares dos Santos–van Zuijlen 的 Pareto 随机势中弱自避行走的变分刻画），紧密邻域 1 篇（Cai–Li–Shiraishi 用 recovery 性质唯一刻画三维 LERW 缩放极限，解决 Sapozhnikov–Shiraishi 猜想 1.3）。非马氏过程与 stochastic flow 两条主线无新作，按宁缺毋滥原则不凑数。"
tags: ["math.PR", "branching process", "branching random walk", "branching capacity", "self-interacting random walk", "loop-erased random walk", "Annals of Probability", "PTRF"]
categories: ["Math"]
showToc: true
tocopen: true
---

> 📅 本期覆盖 arXiv math.PR **Fri, 9 Oct 2026** 公告批次（该批次共 45 篇），并同步扫描 *Probability Theory and Related Fields*（PTRF，CrossRef 0178-8051，近 30 条）与 *Annals of Probability*（CrossRef 0091-1798，近 30 条）。候选池合计 **105 篇**。
>
> 这是 Math 栏目的**第一期**：历史基线为空，去重自检返回 `arXiv IDs = 0 / DOIs = 0 / titles = 0`，属首次运行的正常状态。数据源方面，*Annals of Mathematics* 的 WordPress RSS 本期返回 0 条，AoP future papers（imstat.org）仍被 Anubis 反爬拦截，两者均不阻塞出刊。
>
> **04:00 增补（第 7–10 篇）。** 本栏目在当日 00:30 出刊后于 04:00 再次按同一管线跑了一遍：arXiv math.PR 仍停在**同一个** Fri, 9 Oct 2026 批次（周一的新批次尚未上线），但去重自检这次返回 `arXiv IDs = 5 / DOIs = 3 / titles = 6` —— 说明首刊 6 篇已被正确排除，而候选池中仍留有若干**未被收录、且分数不低**的主线论文。因此本期采用**增补**方式追加 4 篇（Qingsan Zhu 的 branching capacity 奠基之作、Hartung–Louidor–Wu 的分支布朗运动极值水平集涨落、König 等人的 Pareto 随机势弱自避行走、Cai–Li–Shiraishi 的三维 LERW 缩放极限刻画），而非另起一期重复占位。
>
> 合计 10 篇的分布：**branching process 主线 5 篇**（香肠容量 / Yaglom 型极限定理 / 无穷维 Kesten–Stigum 强律 / branching capacity / BBM 极值水平集），**self-interacting random walk 主线 4 篇**（⋆-VRJP / 弱强化 Pólya 瓮 / 径向 excited random walk / 弱自避行走），**紧密邻域 1 篇**（三维 LERW）。**非马氏过程**与 **stochastic flow** 两条主线在整个候选池中没有真正命中的新作（既无 Volterra / 记忆核 / 分数阶反常扩散类的非马氏动力学，也无 flow of diffeomorphisms / isotropic stochastic flow 类结果），按宁缺毋滥原则继续留空，不收泛概率论文凑数。

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

### On the critical branching random walk I: branching capacity and visiting probability

**链接：** https://doi.org/10.1007/s00440-026-01530-9 ｜ **DOI：** 10.1007/s00440-026-01530-9 ｜ **预印本：** https://arxiv.org/abs/1611.10324

**作者 / 机构：** Qingsan Zhu（OpenAlex 元数据记录的机构为南京航空航天大学 Nanjing University of Aeronautics and Astronautics；2016 年 arXiv 预印本署名机构为 University of British Columbia, Vancouver）

**发表信息：** *Probability Theory and Related Fields*，2026-08-22 在线发表；卷 / 期 / 页码：CrossRef 与 OpenAlex 均未提供

**一句话总结：** 把离散位势论的容量理论整体搬到**临界分支随机游动**上，对 `ℤ^d`、`d ≥ 5` 中的任意有限集定义 branching capacity `BCap(K)`，并证明它同时控制「从远处出发的临界 BRW 访问 `K`」的概率渐近与命中点的条件分布。

**研究问题：** 经典离散位势论中，有限集 `K` 的容量为 `Cap(K) = Σ_{a∈K} ES_K(a)`，并有三条基准结论：`lim ‖x‖^{d-2}·P(S_x visits K) = a_d·Cap(K)`；条件**首**访问点分布收敛到 `ES_K(a)/Cap(K)`（即调和测度）；条件**末**访问点分布也收敛到同一测度。把这些搬到临界 BRW 上有一个陷阱：直接把「BRW 永不回到 `K` 的概率」当作逃逸概率的推广**并不对** —— 必须定义两个不同的推广，一个对应首访问点、一个对应末访问点。

**主要结果：**
- 作者引入 `Es_K(x)` 与 `Esc_K(x)`（分别对应首、末访问点，二者都来自无穷版本的分支过程），并定义 `BCap(K) = Σ_{z∈K} Es_K(z) = Σ_{z∈K} Esc_K(z)`。
- **定理 1.1**：设 `d ≥ 5`，后裔分布 `μ` 均值为 1、方差 `σ² > 0`，跳跃分布 `θ` 零均值、不支撑在 `ℤ^d` 的真子群上且满足弱 `L^d` 条件 `θ({|x| > r}) < C·r^{-d}`。则
  `lim_{x→∞} ‖x‖^{d-2}·P(𝒮_x visits K) = a_d·BCap(K)`；
  `lim_{x→∞} P(𝒮_x(τ_K) = a | 𝒮_x visits K) = Es_K(a)/BCap(K)`；
  `lim_{x→∞} P(𝒮_x(ξ_K) = a | 𝒮_x visits K) = Esc_K(a)/BCap(K)`。
  其中 `τ_K`、`ξ_K` 是**深度优先搜索**意义下的首、末访问时刻，`a_d` 与随机游动情形是同一个常数。后裔分布退化为 `μ(1) = 1` 时，`Es_K`、`Esc_K` 分别退化为反向游动与原游动的逃逸概率，定理 1.1 回到随机游动的经典结果。
- **定理 1.2**：条件于 `𝒮_x` 访问 `K`，`K` 与 `𝒮_x` 值域的**交集**依分布收敛（由定理 9.1 关于进入点集合的收敛推出）。
- **定理 1.3**：对有限 `A` 与满足 `ρ(x,A) ≥ 0.1·diam(A)` 的 `x`，有 `P(𝒮_x visits A) ≍ BCap(A)/ρ(x,A)^{d-2}` —— 与随机游动的 `Cap(A)/ρ(x,A)^{d-2}` 完全平行。
- **定理 1.4**（球的 branching capacity）：`m` 维球 `B^m(r)` 满足 `BCap(B^m(r)) ≍ r^{d-4}`（`m ≥ d-3`）、`≍ r^{d-4}/log r`（`m = d-4`）、`≍ r^{m}`（`m ≤ d-5`）；对比经典容量 `Cap(B^m(r)) ≍ r^{d-2}`（`m ≥ d-1`）、`≍ r^{d-2}/log r`（`m = d-2`）、`≍ r^{m}`（`m ≤ d-3`）。
- **定理 1.5**：两个非退化临界后裔分布 `μ₁`、`μ₂`（有限二阶矩）给出的 branching capacity 可比较，比较常数 `C(μ₁,μ₂)` **甚至与跳跃分布 `θ` 无关**。作者明确指出跳跃分布变化时的可比性（文中式 (1.10)）**是猜想，本文未能证明**。
- 定位：Le Gall 与 Lin 在 `d ≤ 3` 给出 `lim ‖x‖²·P(𝒮_x visits 0) = 2(4-d)/(dσ²)`，并提出其他维数的问题；定理 1.1 解决了 `d ≥ 5` 这一侧，临界维 `d = 4` 由同系列第三篇处理（`lim ‖x‖²·log‖x‖·P(𝒮_x visits K) = 1/(2σ²)`）。

**方法与证明思路：**
- 正文骨架为「§3 逃逸概率与 branching capacity → §4 单调性与次可加性 → §5 带特殊杀死的随机游动 → §6 格林函数收敛 → §9 条件进入测度的构造与收敛 → §10 球的 branching capacity」。
- 一个值得记下的**反向**用法：按定义直接计算逃逸概率通常很难，但可以反过来用访问概率渐近 —— 先估计 `P(𝒮_x visits A)`，再反推 `BCap(A)` 的上下界；§10 中球的容量阶正是这样得到的。

**技术亮点：**
- 「逃逸概率必须拆成两个」这一观察是整条 branching capacity 理论的入口，此前并不显然；
- 定理 1.5 说明 branching capacity 在相当程度上**不依赖模型细节**（后裔分布可换，跳跃分布甚至不进入常数），这为把它当作一个稳健的势论不变量打下基础；
- 与同日收录的香肠容量一文直接咬合：后者反复使用的 `BCap(A) ≍ Cap_{d-4}(A)` 判据，正是本文定理 1.4 在 `d-4` 阶上的体现。

**与关注领域的关联：** 属 **branching process 主线**的奠基位置 —— `BCap` 这个概念本身就由本文引入，后续 Bai–Delmas–Hu 关于随机游动值域 branching capacity 的工作（arXiv:2402.13735、arXiv:2404.19447）明确以「Zhu 2016」为定义来源，Schapira 关于随机游动值域 branching capacity 的大数律（arXiv:2303.17830）也建立在同一概念之上。

**研究价值：** ⭐⭐⭐⭐⭐（5/5）— 一篇把经典位势论整体移植到分支设定上的工作，定理编号、维数条件与容量阶都给出了可核验的显式形式。两点如实说明：其一，PTRF 版本正文未能获取（Springer 落地页本期返回反爬挑战，CrossRef 与 OpenAlex 均无摘要），上述陈述取自同题预印本 arXiv:1611.10324v2，若期刊版有修订以期刊版为准；其二，它并非「新写」的论文 —— 预印本可追溯到 2016 年，PTRF 直到 2026-08-22 才在线发表。

---

### On the fluctuations of the extremal and cluster level sets of branching Brownian motion

**链接：** https://doi.org/10.1007/s00440-026-01477-x ｜ **DOI：** 10.1007/s00440-026-01477-x ｜ **预印本：** https://arxiv.org/abs/2405.17634

**作者 / 机构：** Lisa Hartung（美因茨约翰内斯·古腾堡大学 Johannes Gutenberg University Mainz）、Oren Louidor（以色列理工学院 Technion）、Tianqi Wu（以色列理工学院 Technion）

**发表信息：** *Probability Theory and Related Fields*，2026-07-07 在线发表；卷 / 期 / 页码：CrossRef 与 OpenAlex 均未提供

> ⚠️ **摘要来源说明**：PTRF 的 Springer 落地页本期返回反爬挑战，CrossRef 与 OpenAlex 均未收录该文摘要，Semantic Scholar 亦无摘要。以下结果陈述取自**同作者、同主题的预印本** arXiv:2405.17634（题为 *On the Growth of the Extremal and Cluster Level Sets in Branching Brownian Motion*，2024-05-27）。期刊版题名与预印本略有差异，若两者有出入以期刊版为准；证明细节未获取，不作推断。

**一句话总结：** 给出分支布朗运动两类点过程 —— 极值点过程与（谱系邻域内的）簇点过程 —— 的上水平集 `[-v, ∞)` 质量随 `v → ∞` 的渐近：前者是几乎必然意义下的 `C_⋆ Z v e^{√2 v}(1+o(1))`，后者是 `√2 v` 减去 `v^{2/3}` 阶的随机涨落。

**研究问题：** 分支布朗运动的极值结构有两个层次的记录对象：**极值点过程**记录所有极值的高度，**簇点过程**记录局部极大值周围「谱系邻域尺度为 1」内的相对高度。本文关心的是这两者各自的**上水平集质量**在 `v → ∞` 时如何增长。

**主要结果：**
- **极值点过程**：上水平集的质量增长为 `C_⋆ Z v e^{√2 v}(1+o(1))`，`v → ∞`，**几乎必然**成立；其中 `Z` 是相应导数鞅（derivative martingale）的极限，`C_⋆ ∈ (0, ∞)` 为普适常数。作者指出此结论**改进了** Cortines 等人（arXiv:1703.06529）与 Mytnik 等人（arXiv:2009.02042）的工作 —— 那些结果只在**依概率**意义下给出渐近。
- **簇点过程**：上水平集质量的**对数**增长为 `√2 v` 减去 `v^{2/3}` 阶的**随机涨落**，这些涨落在极限下由一个**显式分布**给出。作者指出这使 Mueller 等人（arXiv:1910.06382）与 Le 等人（arXiv:2207.07672）在物理文献中的推导得以严格化，并**解决了其中一个猜想**。

**方法与证明思路：** 未获取（见上方摘要来源说明），此处不作推断。

**技术亮点：**
- 把极值点过程的质量渐近从「依概率」提升到「几乎必然」，对这类依赖极值样本的对象而言通常并不容易；
- 簇水平集的 `v^{2/3}` 涨落阶与显式极限分布，把此前只有物理推导的预测变成了定理；
- 两类点过程在同一篇里平行处理，恰好对应 BBM 极值结构的「全局高度」与「局部谱系」两个尺度。

**与关注领域的关联：** 属 **branching process 主线**（branching Brownian motion 的极值与谱系邻域结构），与同日收录的两篇临界分支随机游动工作共享「分支结构 + 极值 / 占位」的方法论底色。

**研究价值：** ⭐⭐⭐⭐（4/5）— 结果本身很硬（a.s. 渐近 + 显式涨落律），但本条目受限于期刊摘要不可得；若要精读建议直接读预印本并核对期刊版。

---

### Weakly self-avoiding walk in a Pareto-distributed random potential

**链接：** https://doi.org/10.1214/25-aop1792 ｜ **DOI：** 10.1214/25-aop1792 ｜ **预印本：** https://arxiv.org/abs/2306.03788

**作者 / 机构：** Wolfgang König（柏林 Weierstrass 应用分析与随机研究所 Weierstrass Institute for Applied Analysis and Stochastics）、Nicolas Pétrélis（南特大学 Laboratoire de Mathématiques Jean Leray, Université de Nantes）、Renato Soares dos Santos（米纳斯吉拉斯联邦大学 UFMG 数学系）、Willem van Zuijlen（柏林 Weierstrass 应用分析与随机研究所）

**发表信息：** *The Annals of Probability*, Vol. 54, No. 3, pp. 1427–1477（2026-05-01）

**一句话总结：** 在 i.i.d. Pareto 随机势中同时带**被势吸引**与**弱自避式自排斥**两种竞争相互作用的连续时间随机游动模型里，识别出配分函数的对数渐近（一个随机变分公式），并在 `α > 2d` 时给出主导路径行为的完整刻画与相应的大数律。

**研究问题：** 路径测度上同时挂着两种相反的力：一种把路径拉向随机势取值大的位置（吸引），一种是弱自避行走式的自排斥。势取 i.i.d. Pareto 分布、参数 `α > d`。两种相互作用的强度被调到 `t → ∞` 时**贡献同一量级** —— 这是竞争最激烈、也最难的区间。问：配分函数如何渐近？哪一类路径给出主导贡献？

**主要结果：**
- **(1) 对数渐近**：配分函数的对数渐近由一个**随机变分公式**给出。
- **(2) 主导路径行为（`α > 2d`）**：给出主贡献路径的显式图像 —— 路径沿一条最优轨迹，**在有限多个随机格点上各停留一个正的随机比例的时间**。
- **大数律**：证明上述行为的大数律，即**所有其他路径行为对配分函数的贡献都严格更小**。
- **极限对象**：变分问题与最优路径的**联合分布**可由随机势重标度后得到的**极限 Poisson 点过程**表达；该收敛为依分布收敛，属 i.i.d. 势在大盒子中重标度的经典极值设定（作者类比 *Ann. Probab.* 37 (2009) 347–392）。

**方法与证明思路：** 摘要层面给出的是结果结构而非证明步骤；可辨识的主线是「把势的极值部分重标度成 Poisson 点过程 → 把配分函数的对数渐近化为一个随机变分问题 → 用大数律排除非最优路径行为」。具体技术细节未获取，不作推断。

**技术亮点：**
- 把「吸引」与「自排斥」调到同一量级而不让任一方压倒另一方，本身就要求一套精细的平衡；
- 极限 Poisson 点过程的出现，把「随机环境中的最优轨迹」问题接到了经典极值理论上，是很自然的桥梁；
- 「有限多个站点、各占正的随机比例时间」这一主导路径图像相当直观，与随机环境中常见的局部化现象一致。

**与关注领域的关联：** 属 **self-interacting random walk 主线**（弱自避行走 / 自排斥路径测度），同时与**紧密邻域**中的 random walk in random environment 交叉 —— 这是两条线少见的正面相接之处。

**研究价值：** ⭐⭐⭐⭐（4/5）— 模型的竞争结构干净，结果以随机变分公式收口，读起来很完整；`α > 2d` 是主要限制，该条件之外的最优路径图像本文未覆盖。

---

### Characterization and scaling limit of three-dimensional loop-erased random walk and random-walk loop-catchers

**链接：** https://arxiv.org/abs/2610.12047 ｜ **arXiv：** arXiv:2610.12047v1 [math.PR]（2026-10-08）

**作者 / 机构：** Gefei Cai、Xinyi Li（北京大学北京国际数学研究中心 Beijing International Center for Mathematical Research, Peking University）、Daisuke Shiraishi（京都大学信息学研究科 Graduate School of Informatics, Kyoto University）

**一句话总结：** 证明「与强度 1 的独立 Brownian loop soup 做环路装饰后可恢复 Brownian 值域」这一 **recovery 性质唯一地刻画了三维 LERW 的缩放极限**，从而解决 Sapozhnikov–Shiraishi 猜想 1.3 的三维情形，并顺带构造出三维 Brownian loop-catchers。

**研究问题：** 三维 LERW 的缩放极限此前已有多个层次的结果：Kozma（*Acta Math.* 199 (2007), 29–152）构造出随机紧集并证明旋转与伸缩不变性；Shiraishi 证明增长指数存在；Li–Shiraishi 证明自然参数化下的收敛。但这些回答的是「极限是什么、怎么参数化」，还没有回答「**仅凭连续统数据能否唯一确定它的律**」。Sapozhnikov–Shiraishi（*PTRF* 172 (2018), 615–662）在 `d = 2, 3` 证明：每个子列极限都是简单曲线，且它与独立强度 1 Brownian loop soup 中所有与它相交的环路之并（取闭包后）与停止的 Brownian 值域同分布；其**猜想 1.3** 问的正是这一 recovery 性质是否唯一决定曲线律。Cai（arXiv:2607.18070）引入 random-walk loop-catchers（参数 `λ ∈ [0,1]`，`λ = 0` 为完整游动迹、`λ = 1` 为 LERW），用纠缠多路径 LERW 给出 Green 函数检验并解决二维情形。本文完成三维推广。

**主要结果：**
- 设定：`B ⊂ ℝ³` 为含 0 的有界连通 Lipschitz 域，`Γ` 为从 0 到 `∂B` 的无参数化曲线空间（带 Hausdorff 度量诱导的 Borel 结构），`ℒ_B^λ` 为独立于 `K` 的强度 `λ` Brownian loop soup，`𝒟_λ(K) := closure(K ∪ ⋃_{ℓ ∈ ℒ_B^λ, ℓ∩K≠∅} ℓ)` 为直接环路装饰。称概率测度 `𝔪` 满足**强度 1 recovery 性质**，若 `𝒟_1(K) =_d W[0, τ_B]`（`W` 为从 0 出发的 Brownian motion，`τ_B` 为其首次离开 `B` 的时刻）。
- **定理 1.1**：满足强度 1 recovery 性质的概率测度 `𝔪` **唯一**，且它就是三维 LERW 从 0 到 `∂B` 的缩放极限律（收敛取无参数化 Hausdorff 迹拓扑）。
- **定理 1.2**：对每个 `0 < λ ≤ 1`，离散 `λ`-random-walk loop-catcher 的胞腔迹 `K_λ^δ` 的律在 `δ = 1/N ↓ 0` 时依 Hausdorff 拓扑收敛到 `ν_λ`；`K_λ^B` 内部为空，且对任意紧集 `A ⋐ B` 成立
  `E[1{K_λ^B ∩ A = ∅}·e^{-λ·m_B(K_λ^B, A)}] = P_0(W[0,τ_B] ∩ A = ∅)`，
  等价于 `𝒟_λ(K_λ^B) =_d W[0,τ_B]`；且 `ν_λ` 是**唯一**满足该式的律。`λ = 1` 时 `ν_1` 退化为定理 1.1 中的 `𝔪`。
- **推论 1.4**：三维 LERW 缩放极限（无穷游走版本，附加无穷远端点）具有 **inversion invariance**（反演不变性）。
- **注 1.3**：定理 1.1 为把三维 LERW 的缩放极限称作 **loop-erased Brownian motion** 提供了内在依据 —— 但这是**分布意义下的**唯一性；Brownian 轨道是否几乎必然存在唯一的（模递增重参数化的）可测 loop-erasure，在二维与三维**都仍开放**。
- **原文自陈的局限**：对 loop-catcher 而言，「作为曲线、模递增重参数化」的收敛是比本文结论更强的断言，本文论证尚未建立 —— recovery 性质确定的是值域，不保留遍历顺序。

**方法与证明思路：**
- 核心工具是 **Green 函数检验（Green-function test）**：Cai 的**纠缠多路径 LERW（entangled multipath LERW）**构造能把 recovery 恒等式转化为**被杀 Green 函数的混合矩**，随机探针（random probes）是其中的执行者。
- 三维部分的主要工作量在于证明所需的**可击性估计（hittability estimates）**，并把有限图上的 recovery 恒等式（文中 (2.15)、(2.16)）过渡到极限。
- 整体是一个「先分离、再识别」的结构：紧致性给出子列极限，Sapozhnikov–Shiraishi 的定理 1.1–1.2 推广到 Lipschitz 域后给出 recovery 性质，定理 1.1 再把所有子列极限的**共同律**识别出来。

**技术亮点：**
- 用「唯一性」而非「构造」来确定三维 LERW 的连续对象 —— 作者明确指出，这把「识别子列极限」与「构造它所需的离散估计」两件事彻底分开；
- recovery 性质只涉及 Brownian motion 与 Brownian loop measure，是真正内在的连续统描述；
- 反演不变性作为副产品出现，而按 Kozma 的框架取得它会相当麻烦。

**与关注领域的关联：** 属**紧密邻域**（loop-erased random walk / loop soup / random interlacement），不在四条主线之内，但它是本期 arXiv 批次中分数最高的候选（22），且恰好呼应本期 branching 一侧的方法论 —— 同样是用一个外部量先锁死结构、再回头推出原本不可直接计算的行为。

**研究价值：** ⭐⭐⭐⭐⭐（5/5）— 解决了一个被明确提出、悬置多年的猜想（Sapozhnikov–Shiraishi 2018），并把 RWLC 这一新模型族的三维连续对象一并构造出来。若你关心 loop soup / SLE / 三维临界几何这条线，这篇是本期最值得先读的 arXiv 新作。

---

## 📊 今日关注领域分布

**主线分布（04:00 增补后）：branching process / branching random walk 5 篇，self-interacting random walk 4 篇，紧密邻域 1 篇，非马氏过程 0 篇，stochastic flow 0 篇。** 后两条主线本期候选池（105 篇）中没有真正命中的新作 —— 既没有 Volterra / 记忆核 / 分数阶反常扩散类的非马氏动力学，也没有 flow of diffeomorphisms、isotropic stochastic flow 或随机动力系统方向的新上线论文。按宁缺毋滥原则，这两条主线本期留空，不用泛概率论文（本期候选池中另有 transfer operator / random matrix / SPDE 抽样一类的工作，均属邻域之外）凑数。

增补之后，**branching 这条线内部出现了一个清晰的地基结构**：Zhu 的 branching capacity 是最底下那块砖（定义 `BCap`、给出访问概率渐近与命中点条件分布），同日收录的另外两篇直接站在它上面 —— Ishak 的香肠容量反复用 `BCap(A) ≍ Cap_{d-4}(A)` 作可比性判据，Chen–Lin 的 Yaglom 型定理里「命中概率本就很小」这件事正是由 `BCap(K)` 控制的。加上 Bansaye 等人的无穷维强律与 Hartung 等人的 BBM 极值水平集，这条主线今天被**势论 / 容量**与**极值结构**两股占满。self-interacting 一侧则保持三条独立进路（强化跳跃过程 / 强化瓮 / excited walk），本期增补的弱自避行走是第四条，且它是唯一一个把模型放进**随机环境**里做的。

另一个层面的共同点值得记录：**这 10 篇里有超过一半在处理「结构比看上去更受约束」这件事。** ⋆-VRJP 在不可逆设定下找回部分可交换性并落到马氏跳跃过程的混合；Pólya 瓮把随机逼近轨道压到一个 Liouville 定理所能锁定的确定性均衡；径向 excited random walk 用刚性论证把局部时剖面逼成唯一锥形；Yaglom 一文借 spine 分解把条件结构降到单脊上。增补的三篇重复了同一手法：Zhu 用容量锁住访问概率与命中点分布（甚至反过来用访问概率去估容量）；Cai–Li–Shiraishi 用 recovery 性质锁住三维 LERW 的律；König 等人用随机变分公式锁住最优路径。手法是同一种：**先找到一个能从外部锁死结构的量（混合测度 / Liouville 性质 / 格林函数鞅 / 脊分解 / 容量 / recovery 性质 / 变分公式），再回头推出原本不可直接计算的行为。** 与之对照，香肠容量与 BBM 极值两篇走的是另一条路 —— 更新式分割 + 环形分解、或直接的极值渐近计算，属于「局部化 + 加和」而非「全局锁定」。

第三点：**Yaglom 型结果这一支近期明显在升温。** 除本期的 PTRF 长文（7 月上线）外，同一批作者在 arXiv 上还有 2026-09 的相关工作（二维情形的局部存活概率与 Yaglom 极限定理），本期因超出 21 天抓取窗口未纳入；对这条线感兴趣的读者可以顺着一并读。

最后交代**未收录但值得留意**的几篇（均因篇幅与主线优先级让位，留待后续）：Christian Mönch 的 *Loop soup percolation and boundary dimension on metric trees*（arXiv:2610.12053，布朗 loop soup 在度量树上的渗流阈值为 `1 - D_G/2`，是 Lyons 分支数公式的类比，score 19.4）；Robin Khanfir 的 *Fluctuations of the Horton–Strahler number of stable Galton–Watson trees*（*AoP* 54(4), 1908–1974，score 6，恰好卡在收录取线上）；Alberto Chiarini 与 Emanuele Pasqui 的随机环境下 DGFF 硬墙排斥（`d ≥ 3`，score 20.6）；Hong-Quan Tran 的 Glauber–exclusion 过程 cutoff（score 17）。其中 Mönch 那篇严格说落在**紧密邻域**（loop soup）而非四条主线上，若后续某期 branching / self-interacting 一侧缺稿，它是首选补位。

## 🏆 最值得精读的几篇

1. **On the critical branching random walk I（PTRF，04:00 增补）** — 本期唯一一篇「奠基性」文章：`BCap` 这个概念从这里出来，而同日收录的香肠容量与 Yaglom 两篇都在用它。若只想读一篇 branching 侧的文章，读这篇的定理 1.1、1.4、1.5 就够了 —— 访问概率渐近、球的容量阶、以及「换个后裔分布容量只差一个常数」这三件事，构成了后续几乎所有 branching capacity 工作的共同底盘。

2. **Characterization and scaling limit of three-dimensional loop-erased random walk（arXiv，04:00 增补）** — 本期最新、也最「干净利落」的一篇：一个悬置多年的猜想（Sapozhnikov–Shiraishi 2018 猜想 1.3）被一个唯一性论证直接关闭，而且用的判据只是 Brownian motion 与 Brownian loop measure。它示范的那种「先分离后识别」（紧致性给子列极限 → recovery 性质给约束 → 唯一性给共同律）很可能被搬到别的高维临界模型上。

3. **Yaglom theorem for critical branching random walk on ℤ^d（PTRF）与 The ⋆-vertex-reinforced jump process（Annals of Probability）** — 首刊时点名的两篇，理由不变：前者按三个维数区间完整关闭了 Le Gall–Merle 提出的问题，想进入临界分支随机游动与超布朗运动的交叉地带，它是目前最合适的入口；后者把「非可逆性」这个自强化过程里最麻烦的东西重新装进了随机 Schrödinger 算子与混合表示的语境，⋆-对称 / ⋆-反对称函数空间上的积分恒等式很可能在此后反复被引用。

---

*数据来源：arXiv math.PR 2026-10-09（Fri, 9 Oct 2026）公告批次（45 篇） · Annals of Mathematics RSS（本期 0 条） · Annals of Probability（CrossRef 0091-1798） · Probability Theory and Related Fields（CrossRef 0178-8051） · 机构与卷期页补充自 OpenAlex 与 CrossRef | 首刊 2026-10-12 00:30，04:00 增补 4 篇，最后更新 2026-10-12 04:08 (北京时间)*
