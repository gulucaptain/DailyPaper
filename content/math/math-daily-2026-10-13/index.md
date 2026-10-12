---
title: "Math 每日速递 · 2026-10-13"
date: 2026-10-13T04:08:00+08:00
draft: false
description: "arXiv math.PR 2026-10-12（Mon, 12 Oct 2026）新批次 40 篇 + PTRF / Annals of Probability 近期上线，候选池 94 篇，精选 6 篇：branching process 主线 2 篇（Ting Yang 给出超临界非局部分枝超过程加权占据时的函数中心极限定理与三 regime 三分律；Khanfir 刻画出稳定 Galton–Watson 树 Horton–Strahler 数的涨落并定义 Strahler dilation），非马氏过程主线 1 篇（Mijatović–Virgili 用逆从属子时变斜反射扩散，给出次 / 正常 / 超扩散三 regime 的二阶矩渐近与爆炸判据），stochastic flow 主线 1 篇（Chengshi Wang 建立 Bass–Burdzy 流局部时的白噪声积分表示，并用 Jacobi 流回答 Aïdékon–Hu–Shi 的一个问题），紧密邻域 2 篇（Chiarini–Pasqui 在 d ≥ 3 随机环境下 DGFF 硬墙排斥的淬火大偏差与路径熵排斥；Cannizzaro–Klose–Moulard 在临界维数 d = 2 上给出一般非线性随机 Burgers 方程对数超扩散的高斯不动点）。self-interacting random walk 主线本期唯一候选 score 5 未过红线，按宁缺毋滥留空。"
tags: ["math.PR", "branching process", "superprocess", "non-Markovian", "stochastic flow", "Gaussian free field", "Annals of Probability", "PTRF"]
categories: ["Math"]
showToc: true
tocopen: true
---

> 📅 本期覆盖 arXiv math.PR **Mon, 12 Oct 2026** 公告批次（该批次共 40 篇），并同步扫描 *Probability Theory and Related Fields*（PTRF，CrossRef 0178-8051，近 26 条）与 *Annals of Probability*（CrossRef 0091-1798，近 28 条）。候选池合计 **94 篇**。
>
> 这是本栏目第二期，也是**换批次后的第一期**：去重自检返回 `arXiv IDs = 18 / DOIs = 6 / titles = 10` —— 上一期（2026-10-12）收录的 10 篇已被正确排除，因此本期不再沿用上期的「增补」策略，而是照常新开一期。数据源方面 *Annals of Mathematics* 的 WordPress RSS 仍返回 0 条，AoP future papers（imstat.org）依旧被 Anubis 反爬拦截，两者均不阻塞出刊。
>
> 主线分布：**branching process 2 篇，非马氏过程 1 篇，stochastic flow 1 篇，self-interacting random walk 0 篇**，另收紧密邻域 2 篇。self-interacting 一条本期**继续留空**：全池唯一带 reinforcement 关键词的新作是 arXiv:2610.13884（*Interacting Stochastic Systems with Agent-Based Sampling and Connection-Based Reinforcement*），score 5.0，低于本栏目 6 分的收录取线，按宁缺毋滥原则不收，不以泛概率论文凑数。

---

## 📄 今日论文

### Functional limit theorems for weighted occupation times of supercritical superprocesses

**链接：** https://arxiv.org/abs/2610.12503 ｜ **arXiv：** arXiv:2610.12503v1 [math.PR]（2026-10-02）

**作者 / 机构：** Ting Yang（北京理工大学数学与统计学院，School of Mathematics and Statistics, Beijing Institute of Technology, Beijing 100081, P.R. China）

**一句话总结：** 对超临界非局部分枝超过程的**加权占据时**（occupation measure 对时间的积分），先建立大数律，再围绕随机中心化给出函数型中心极限定理，并证明极限类型由测试函数的谱衰减率相对于临界值 λ₁/2 的位置决定，恰有三种 regime。

**研究问题：** 设 `X = (X_t)_{t≥0}` 是 Lusin 空间 `E` 上带非局部分枝机制（non-local branching mechanism）的超过程，其均值半群存在正的首特征值 `λ₁`，配有有界正特征函数 `φ` 与有限特征测度 `φ̃`；`λ₁ > 0` 即超临界。令 `Y_t := ∫₀ᵗ X_s ds` 为占据测度。瞬时线性泛函 `⟨f, X_t⟩` 的涨落定理已有完整结果，问：**把 `X_t` 换成对时间积分过的 `Y_t`（即加权占据时 `⟨f, Y_t⟩`）后，同样的三分律是否还成立、归一化是否变化、极限律是否还是同一批？**

**主要结果：**
- **大数律（式 1.1）**：对任意有界可测 `f`，当 `t → +∞`，`e^{-λ₁t}⟨f, Y_t⟩ —L²→ (1/λ₁)⟨f, φ̃⟩·W^φ_∞`，其中 `W^φ_∞` 是非负鞅 `W^φ_t := e^{-λ₁t}⟨φ, X_t⟩` 的极限。
- **定理 1.3（快衰减，f ∈ 𝒟_S）**：在 `ℙ_{δ_x}` 下，`(e^{λ₁(t+s)/2}·Z_s^{(t)}(f))_{s≥0}` 在 `𝒞[0,+∞)` 中依分布收敛到 `√(W^φ_∞)·G(f)` —— **混合高斯过程**，随机性只来自 `W^φ_∞`。
- **定理 1.4（临界衰减，f ∈ 𝒟(λ₁/2, r)，需额外假设 M4）**：归一化需多一个 `(t+s)^{-(r+1/2)}` 因子，极限是一个**常值高斯过程**，其方差含随机因子 `W^φ_∞`。
- **定理 1.5（慢衰减，(λ, r) ∈ (λ₁/2, λ₁)×[0,+∞) ∪ {(λ₁, 0)}）**：极限不再是高斯的，而是由 `f` 之谱投影所对应鞅 `W^{f*}_t := e^{-λt}⟨f*, X_t⟩` 的极限给出的**非高斯极限**。

**方法与证明思路：**
- 以占据测度的 **Laplace 变换刻画**作总开关（式 1.6）：`ℙ_μ[exp{−⟨f, X_t⟩ − ⟨g, Y_t⟩}] = e^{−⟨U_t[f,g], μ⟩}`，把二阶矩、协方差全部归约到方程 `T_t f` 的积分方程（式 1.7）上。
- 关键观察：由超过程的**正则分枝性质**，涨落过程的任意线性组合都是**无穷可分**随机变量，因而其**特征函数有典则表示**；在适当矩条件下证明该表示的跳跃部分在极限中消失，问题遂归约为高斯部分的收敛。
- 有限维收敛之后，用 **Billingsley 型胎紧性判据**处理 `𝒞[0,+∞)` 上的弱收敛；鞅一侧的胎紧性用 **Aldous 判据**。
- 假设体系为 (H1)(H2)(M2)，其中 (H2) 是 **Perron–Frobenius 型**条件（近年被命名为 Asmussen–Hering 类分枝过程），保证首特征值与特征函数存在。

**技术亮点：**
- **三分律在占据时设定下原样存活，且归一化因子与线性泛函情形〔文献 32〕完全相同** —— 这点并不显然：`Y_t` 多了一层时间积分，`Var_{δ_x}[⟨f, Y_t⟩]` 的精确渐近需要新的估计（引理 2.2–2.3）。
- 但**极限律与线性泛函情形不同**：定理 1.3 的高斯过程由占据时的协方差结构构造，含有**瞬时线性泛函中没有的交叉项**；定理 1.4 / 1.5 的极限还多出因子 `λ^{-1}`，反映时间平均 `∫₀ᵗ e^{λ(s−t)} ds → λ^{-1}` 的固有代价。
- 函数空间层级关系清晰：`𝒟_S ⊂ 𝒟(λ₁/2, 0) ⊂ 𝒟(λ, r) ⊂ 𝒟(λ₁, 0) = ℬ_b(E)`，三个 regime 正是这条链上的三段。

**与关注领域的关联：** 属 **branching process 主线**，位于 measure-valued branching / superprocess 这一支。它把「超临界非局部分枝超过程的涨落定理」从**瞬时**泛函推进到**时间积分**泛函，是该序列工作的占据时版本。

**研究价值：** ⭐⭐⭐⭐⭐（5/5）— 本期候选池最高分（22）。这是一条已经很成熟的研究线（Ren–Song–Zhang 一系关于超临界分枝过程的鞅极限与涨落）的**收口式推进**：大数律 + 三个 regime 的 FCLT 一并给出，且明确指出了与线性泛函情形「归一化相同、极限律不同」这一反差。局限在于定理 1.4 需要额外假设 (M4)，定理 1.5 的极限写成谱投影鞅的极限而非更显式的分布。

---

### Hard wall repulsion for the discrete Gaussian free field in random environment on ℤ^d, d ≥ 3

**链接：** https://doi.org/10.1007/s00440-026-01529-2 ｜ **DOI：** 10.1007/s00440-026-01529-2 ｜ **上线日期：** 2026-08-19

**作者 / 机构：** Alberto Chiarini、Emanuele Pasqui（均为 University of Padua，帕多瓦大学）；卷 / 期 / 页码：CrossRef 与 OpenAlex 均未提供

**一句话总结：** 在 `d ≥ 3`、一致椭圆且有界随机电导（环境测度充分混合）的离散高斯自由场上，证明「场在有界正则区域 `V ⊆ ℝᵈ` 的离散放大上非负」这一硬墙事件的**淬火**大偏差渐近，并刻画条件场的一阶轮廓与路径层面的熵排斥。

**研究问题：** 经典 DGFF 硬墙（entropic repulsion）问题在**常电导**情形已有完整答案。把电导换成随机环境后，模型**失去平移不变性**，原先那套基于平移不变性与显式格林函数的论证失效。问：硬墙概率的大偏差速率还能不能用「容量」写出来？条件场除了被推向远方，是否仍收敛回某个 DGFF？

**主要结果：**
- **淬火大偏差**：硬墙事件概率的渐近速率由两件事刻画 —— **格点方差的本性上确界**（essential supremum of the on-site variances）与 **`V` 的均匀化容量**（homogenized capacity，由淬火不变原理产生）。
- **条件期望的一阶渐近轮廓**：给出硬墙条件下场之期望的首阶渐近，并证明存在**把场推离原点的熵推离**（entropic push-away）。
- **路径层面刻画**：适当**重新中心化**后，条件场**弱收敛到（淬火）离散高斯自由场** —— 即路径层面的 entropic repulsion 成立。

**方法与证明思路：**
- 主要障碍是**模型无平移不变性**。作者的突破口是：**条件期望场的超调和性**（superharmonicity）。
- 用超调和性先拿到条件期望的一个**锐利的一致下界**；再用这个下界去估计条件期望的**调和性亏格**（harmonicity defect）—— 这一步被作者明确点名为关键 —— 进而反推出匹配的锐利上界。
- 上下界合拢后，路径层面的熵排斥结论随之得出。速率中的「均匀化容量」则由**淬火不变原理**提供。

**技术亮点：**
- 「超调和性 → 一致下界 → 调和性亏格 → 一致上界」这条三段式，是绕过平移不变性缺失的**通用手法**，很可能被移植到别的随机环境界面模型上。
- 结论是**淬火**的（对环境的几乎必然陈述），而非退火，这在随机环境 DGFF 中本就更难。
- 速率里同时出现**微观量**（格点方差本性上确界）与**宏观量**（均匀化容量），是均匀化理论的典型signature。

**与关注领域的关联：** 严格说落在**紧密邻域**而非四条主线上 —— 它属 Gaussian free field 与 random walk / field in random environment 的交叉。之所以本期收录，一是分数确实高（21.8，全池第二），二是它的「随机环境 + 容量刻画」语境与 branching / 势论一侧共用同一套语汇。

**研究价值：** ⭐⭐⭐⭐（4/5）— 把 DGFF 硬墙排斥这一经典问题推进到 genuinely 无平移不变性的随机环境设定，且给出的是淬火结论。未给卷期页（CrossRef / OpenAlex 均缺），引用时需注意。

---

### Superdiffusive central limit theorem for a class of driven diffusive systems at the critical dimension

**链接：** https://doi.org/10.1007/s00440-026-01515-8 ｜ **DOI：** 10.1007/s00440-026-01515-8 ｜ **上线日期：** 2026-07-15 ｜ **预印本：** https://arxiv.org/abs/2601.05945（2026-01-09）

**作者 / 机构：** Giuseppe Cannizzaro（University of Warwick，华威大学）、Tom Klose（University of Oxford，牛津大学）、Quentin Moulard（TU Wien，维也纳工业大学）；卷 / 期 / 页码：CrossRef 与 OpenAlex 均未提供

**一句话总结：** 把二次非线性随机 Burgers 方程（SBE）在**临界维数 `d = 2`** 上的对数超扩散中心极限定理，推广到**一般非线性**情形：在对数超扩散的时空缩放下，大尺度行为由**同一个显式高斯不动点**给出，只是系数经重整化。

**研究问题：** SBE 描述带守恒量的驱动扩散系统在介观尺度上的涨落。在空间维数 `d = 2` 时 SBE 是**临界的** —— 在扩散缩放下形式不变，因而**落在 Regularity Structures 与 paracontrolled calculus 的适用域之外**。物理上（van Beijeren–Kutner–Spohn, *PRL* 1986，基于 Spohn 的非线性涨落流体力学）预期它是对数超扩散的。此前 Cannizzaro–Moulard–Toninelli（arXiv:2501.00344, 2025）对**二次**非线性完全证明了这一点。问：**换成一般非线性后，同一个不动点还成立吗？**

**主要结果：**
- 在**临界维数、无穷体积**下，对一般非线性 SBE，在**对数超扩散时空缩放**下，大尺度极限是**与二次情形相同的显式高斯不动点**，系数经适当重整化。
- 由此**严格论证并部分修正**了 van Beijeren–Kutner–Spohn（*Phys. Rev. Lett.*, 1986）基于 Spohn 非线性涨落流体力学的经典物理推导。
- 作者强调两个「首次」：这是**首个关于非平衡系统的普适性型结果**；也是 Hairer–Quastel（*Forum of Mathematics, Pi*, Vol. 6, 2018, e3）**首次被推广到临界维数、并越过弱耦合机制**。
- 作为背景（出自二次情形的姊妹篇 arXiv:2501.00344）：`d = 2` 的 SBE 扩散系数以 `(log t)^{2/3}` 发散，且作者精确辨识出对数前因子**正比于 `λ^{4/3}`**（`λ > 0` 为耦合常数）—— 与一维 stochastic Burgers / KPZ 方程完全相同。

**方法与证明思路：**
- 最大的困难是**对非线性项只施加了温和的增长条件**，这使得**连微观方程的适定性本身都变得非平凡**。
- 技术上的两项新意：一是对生成元的**非二次部分**建立精细估计；二是给出**二次 SBE 解所对应 resolvent 的一个新逼近**。
- 整体路线延续姊妹篇：对 SBE 生成元的 resolvent 在**所有长度尺度**上做精细控制，从而跨过临界维数下正则性结构失效的障碍。

**技术亮点：**
- 在临界（形式尺度不变）的奇异 SPDE 上拿到**非弱耦合**的缩放极限，这是此前没有先例的。
- 从一个具体的二次可解情形出发，通过**重整化系数**把结论抬到一般非线性 —— 这类「以可解点为锚 + 微扰控制」的路线对其它临界奇异 SPDE 有模板意义。
- 作者明确指出方法应适用于**其它临界驱动扩散系统**（如二维 ASEP），并猜想它们与 SBE 有相同的大尺度不动点。

**与关注领域的关联：** 落在**紧密邻域**（hydrodynamic limit / 相互作用粒子系统的普适性与缩放极限），不属四条主线。但它与本期另一篇（时变反射扩散）在**反常扩散 / 超扩散**的主题上遥相呼应：一篇在 SPDE 侧给出对数超扩散的高斯不动点，一篇在半马氏侧给出超扩散 / 次扩散 / 正常的 regime 判据。

**研究价值：** ⭐⭐⭐⭐⭐（5/5）— 临界维数 + 非弱耦合 + 一般非线性三个条件同时满足，这是 SBE / KPZ 普适类近年少见的重磅结果。唯一提醒：卷期页未提供（PTRF 在线优先出版）。

---

### Time-changed reflected diffusions: subdiffusion, superdiffusion and explosion

**链接：** https://arxiv.org/abs/2610.13302 ｜ **arXiv：** arXiv:2610.13302v1 [math.PR]（2026-10-09，25 页，1 图）

**作者 / 机构：** Aleksandar Mijatović（Department of Statistics, University of Warwick, UK）、Francesco Virgili（Department of Mathematics “Giuseppe Peano”, University of Turin, Turin, Italy）

**一句话总结：** 把广义抛物区域中的斜反射扩散（obliquely reflected diffusion）用**独立的逆从属子（inverse subordinator）时钟**做时变，给出精确的**二阶矩渐近**，从而用一个参数关系同时读出**次扩散 / 正常扩散 / 超扩散**三种 regime，并给出**爆炸的完整判据**。

**研究问题：** 动机来自**反常扩散的半马氏模型**（semi-Markov models of anomalous diffusion）。在广义抛物区域中，反射本身会诱导**超扩散**增长；若再套上一个**无穷均值从属子**的逆时钟，时钟的「拖慢」与反射的「加速」会互相竞争。问：竞争的结果如何定量？爆炸何时发生、何时有有限均值？

**主要结果：**
- **定理 1.1（存在唯一性）**：在区域 `𝒟` 与函数 `ϕ` 满足 (3.2) 时，对任意 `z ∈ 𝒟`，方程 (1.1) 在随机区间 `[0, 𝒯_ℰ)` 上存在**强解**且**轨道唯一**；在 `{𝒯_ℰ < ∞}` 上，`‖𝒵_t‖_d → ∞` 且局部时 `ℒ_t → ∞`。
- **定理 1.2(i)（爆炸判据）**：零内部漂移 `μ ≡ 0` 时，若 `β < −1` 则**几乎必然爆炸**；若 `β ≥ −1` 则**不爆炸**。爆炸情形下 `𝔼_z[𝒯_ℰ] = 𝔼[S₁]·𝔼_z[t_ℰ]`，其中 `t_ℰ` 是未时变扩散的爆炸时间且 `0 < 𝔼_z[t_ℰ] < ∞`。因此 **`𝔼_z[𝒯_ℰ] < ∞` 当且仅当 `𝔼[S₁] < ∞`**。
- **定理 1.2(ii)（二阶矩渐近）**：设 `−1 < β < 1`，Laplace 指数 `φ` 在 0 处正则变、指数为 `α ∈ [0,1]`。令 `p := 2/(1+β)`，`κ := s₀σ²(1+β)/(2c₀a_∞)`，则 `𝔼_z‖𝒵_t‖²_{d+1} ∼ κ^p · Γ(1+p)/Γ(1+αp) · φ(1/t)^{-p}`。若 `φ(λ) ∼ cλ^αℓ(λ)`，右端即 `κ^p · Γ(1+p)/Γ(1+αp) · t^{αp}·(cℓ(1/t))^{-p}`。
- **例 1.3（逆 α-稳定时钟）**：`φ(t) = t^α` (`α ∈ (0,1)`) 时，`𝔼_z‖𝒵_t‖²_{d+1} ∼ K₀·t^{2α/(1+β)}`，其中 `K₀ = Γ((3+β)/(1+β))·(s₀σ²(β+1))^{2/(1+β)} / [ Γ(1+2α/(1+β))·(2c₀a_∞)^{2/(1+β)} ]`。指数 `2α/(1+β)` 直接区分**次扩散 / 正常扩散 / 超扩散**。
- **命题 1.4**：对 `β ∈ (−1,1)` 与**任意** Laplace 指数 `φ`，有双边界 `𝔼_z‖𝒵_t‖²_{d+1} ≍ φ(1/t)^{-p}`。
- **几乎必然增长律**（结合〔10, Thm 2.2〕与推论 1.6）：`‖𝒵_t‖_{d+1} / T_t^{1/(1+β)} → (s₀σ²(1+β)/(2c₀a_∞))^{1/(1+β)}` a.s.，其中 `T_t = inf{u ≥ 0 : S_u > t}`。

**方法与证明思路：**
- 把〔MMW23〕的**几乎必然增长律强化为 L² 收敛**（命题 2.1），从而得到二阶矩的精确渐近 —— 这是本文在技术上的主轴。
- 关键结构是**时变表示**：先处理未时变的反射扩散，再用 `𝒵_t = Z_{T_t}` 把结论搬过来；正则变指数的 Gamma 比 `Γ(1+p)/Γ(1+αp)` 正是由 `T_t` 的矩渐经 Tauber 型换算得到。
- 支撑性结果还建立了**强存在性、轨道唯一性与时变表示**，并且**允许时钟与驱动布朗运动相关**。

**技术亮点：**
- 「反射诱导超扩散」与「逆从属子拖慢」这两种相反效应被压进**一个指数 `2α/(1+β)`** 里，regime 判定一目了然。
- 爆炸判据干净到可以一句话说完：**有限均值爆炸时间 ⟺ 从属子有有限均值**。
- 允许**依赖时钟**这一点很重要：这说明时变表示并非只能用在独立情形。

**与关注领域的关联：** 属 **非马氏过程主线**。逆从属子时变正是半马氏 / 反常扩散建模的标准装置 —— 时变后的过程在原始时间尺度上带记忆（老化），不再是马氏过程。这是本期四条主线上唯一一篇非马氏动力学。

**研究价值：** ⭐⭐⭐⭐（4/5）— 问题清晰、结论完整（存在唯一性 + 二阶矩 + 爆炸判据三件套），且把〔MMW23〕的 a.s. 结果实质性地提升到了二阶矩层面。局限是命题 1.4 只给双边界 `≍`，精确渐近需要 Laplace 指数在 0 处正则变这一额外条件。

---

### An infinite-dimensional representation of Ray-Knight theorems for the Bass-Burdzy flow

**链接：** https://arxiv.org/abs/2610.13561 ｜ **arXiv：** arXiv:2610.13561v1 [math.PR]（2026-10-09，32 页）

**作者 / 机构：** Chengshi Wang（复旦大学数学科学学院，SMS, Fudan University；cswang17@fudan.edu.cn）

**一句话总结：** 为 Bass–Burdzy 流之逆像 `ℛ_t^{-1}(0)` 的局部时建立由**共同白噪声驱动**的积分表示（经典 Ray–Knight 定理的无穷维类比），并把该表示推广到由「在其最大值处受扰的带漂移布朗运动」驱动的 Bass–Burdzy 流，据此**回答 Aïdékon–Hu–Shi（2026）的一个问题**：如何用 Bass–Burdzy 流描述受扰反射布朗运动在给定其占据测度时的条件律。

**研究问题：** Bass–Burdzy（1999）引入了由布朗运动驱动的实线同胚随机流 `ℛ_t: x ↦ ℛ_t(x)`。Hu–Warren（2000）得到了过程 `Y_t := ℛ_t^{-1}(0)` 的 Ray–Knight 定理。另一方面，Aïdékon–Hu–Shi（2024）为**经典** Ray–Knight 定理给出了白噪声驱动的积分表示。问：**这一表示能否搬到 Bass–Burdzy 流的情形？** 若能，能否用它回答 Aïdékon–Hu–Shi（2026）提出的、关于受扰反射布朗运动（PRBM）条件律的问题？

**主要结果：**
- **定理 1.2（本文第一个主结果，式 1.7）**：设 `δ ≥ 0`，`λ ∈ {1, −1}`，白噪声 `𝒲` 由 (4.1) 定义。则对任意 `x ∈ ℝ`、`a ≥ 0`，在事件 `{τ_a(x) < ∞}` 上几乎必然有
  `L^y_{τ_a(x)} = a − 2∫ₓ^y 𝒲([0, κ(L^z_{τ_a(x)})], dz) + 2(x⁻ − y⁻) − 2δ∫ₓ^y κ(L^z_{τ_a(x)}) dz`，`y ≥ x`；
  在瞬时情形还进一步有把 `τ_a(x)` 换成 `∞` 的版本 `L^y_∞ = L^x_∞ − 2∫ₓ^y 𝒲([0, κ(L^z_∞)], dz) + 2(x⁻ − y⁻) − 2δ∫ₓ^y κ(L^z_∞) dz`。
  这就是说 `Y` 的局部时**由一个共同白噪声 `𝒲` 驱动**，是定理 1.1（Hu–Warren 的 Ray–Knight）的多维类比。
- **推广到受扰驱动（定理 1.5 / 1.6）**：对由「带漂移布朗运动在其最大值处受扰」驱动的 Bass–Burdzy 流，定理 1.5 给出相应的白噪声积分表示（取 `μ = 1` 即回到定理 1.2）；定理 1.6（式 1.27）处理常返 regime，白噪声定义在 `[0,1] × ℝ` 上，积分表示中多出含 `1 − 1/μ` 与 `δ − 1` 的漂移项，有效范围为 `−M_{τ_a(x)}(X) ≤ y ≤ x`，且 `y < −M_{τ_a(x)}(X)` 时 `L^y_{τ_a(x)} ≡ 0`。命题 1.4 给出 `ℛ_t(x)` 当 `t → ∞` 时的瞬时 / 常返分类（`λ = 1`，或 `λ = −1` 且 `μδ > 1` 时趋于 `+∞`）。
- **定理 1.3（本文第二个主结果，回答问题）**：设 PRBM `𝐌_t := |B_t| − μL_B(t, 0)`，`Z^{(1)}` 为 (1.17) 所定义的过程（`R` 取 (1.20)）。则 `Z^{(1)}` 与 `Ŷ`（即 `Y` 经时间变换 `ζ` 重参数化后所得）**有相同的局部时流**，从而同分布 —— 这就用 Bass–Burdzy 流描述了 `𝐌` 在给定占据域时的条件律。
- **定理 1.8**：由命题 5.4 与推论 5.7 直接得到 —— 从一个 `Jacobi(2/μ | 0, 2+2δ)` 流 `S = (S_{r,x}(v))` 出发，取 `r → −∞` 的极限构造 `Ψ_x`，即可实现 `Z^{(1)}` 的局部时流。

**方法与证明思路：**
- 沿用 Aïdékon–Hu–Shi（2024）的路线：**从过程 `Y` 自身构造白噪声** `𝒲`，然后把局部时写成关于该白噪声的随机积分 —— 于是所有 `x` 的局部时被锁在同一个噪声上，这才是「无穷维表示」的含义。
- 受扰驱动的情形**不能**像 `μ = 1` 时那样靠考虑 `−ℛ` 从定理 1.2 推出，必须单独论证（这正是定理 1.5 的价值）。
- 定理 1.3 的证明**没有走更新论证**，而是作为定理 1.5 的推论、借助与 **Jacobi 流**的联系得出：由〔4, Prop. 4.3 & Thm 5.9〕，`Z^{(1)}`、`Z^{(2)}` 的局部时流与 `R` 独立，且嵌入一个 `Jacobi(2/μ | 0, 2+2δ)` 流（`δ = 1/μ − 1`）；再由定理 1.5 得出 `Z^{(1)}` 与 `Ŷ` 局部时流同分布。

**技术亮点：**
- 「局部时流」（local time flow，定义 1.7）是本文的枢纽概念：一旦把两个过程的局部时流对上，过程本身的同分布就随之而来。
- 把 Ray–Knight 定理从「逐点分布描述」升级为「由**共同白噪声**驱动的**积分表示**」 —— 这一升级在经典情形由 Aïdékon–Hu–Shi 完成，本文把它搬到 Bass–Burdzy 流与 Jacobi 流的世界。
- 顺带在附录 A 交代了与 **Jacobi 流**和「burglar」的联系，把这条线（Warren–Yor 一系的 Jacobi 流、Aïdékon–Hu–Shi 的 PRBM 工作）串成一体。

**与关注领域的关联：** 属 **stochastic flow 主线** —— 研究对象本身就是实线上的同胚随机流（Bass–Burdzy flow），并经由局部时流与 Jacobi 流相接。这是本期四条主线上唯一一篇随机流方向的新作。

**研究价值：** ⭐⭐⭐⭐（4/5）— 干净地回答了一个由 Aïdékon–Hu–Shi 明确提出的问题，且工具（白噪声积分表示 + 局部时流 + Jacobi 流嵌入）具有明显的复用价值。局限是结论集中在 `λ ∈ {1, −1}`、`δ ≥ 0` 的参数范围， bifurcating regime 由时间反转从常返情形推出，未独立展开。

---

### Fluctuations of the Horton–Strahler number of stable Galton–Watson trees

**链接：** https://doi.org/10.1214/25-aop1798 ｜ **DOI：** 10.1214/25-aop1798 ｜ **出处：** *The Annals of Probability*, Vol. 54, No. 4 (2026), pp. 1908–1974（出版日期 2026-07-01）

**作者 / 机构：** Robin Khanfir（Department of Mathematics and Statistics, McGill University，麦吉尔大学）

**一句话总结：** 对稳定 Galton–Watson 树（含 Catalan 树）在给定规模 `n` 下的 **Horton–Strahler 数**（又称 register function），通过引入一个**实值变体**剔除确定性振荡，证明其重标度指数**联合收敛**到树的缩放极限（稳定 Lévy 树）的一个可测函数，作者称之为 **Strahler dilation**。

**研究问题：** Horton–Strahler 数是衡量有根树**分枝复杂度**的组合工具。对稳定 Galton–Watson 树在给定规模 `n` 下的条件律（它们是稳定 Lévy 树的有限维边缘），已知该量**依概率以 `ln n` 的某个倍数增长**；但它的**涨落**一直不清楚 —— 因为涨落与**确定性振荡**耦合在一起，无法直接分离。问：剥离振荡后，涨落的极限对象是什么？

**主要结果：**
- 作者引入 Horton–Strahler 数的**实值变体**（real-valued variant），以消除与确定性振荡的耦合。
- 证明该量的**重标度指数**（rescaled exponential）与树本身**联合依分布收敛**到树之缩放极限（即**稳定 Lévy 树**）的一个**可测函数**。
- 作者把这个极限对象命名为 **Strahler dilation**，并讨论了它与（离散的）Horton–Strahler 数的相似之处。

**方法与证明思路：**
- 核心的建模动作是**换变量**：把取整数值的 Horton–Strahler 数替换为实值变体，使振荡在重标度指数下被吸收，从而让联合收敛成为可能。
- 在**稳定 Lévy 树**这一连续树上定义极限泛函（Strahler dilation），再证明离散量在 Gromov–Hausdorff–Prokhorov 型树拓扑下的连续性 / 可测性，从而由树的缩放极限（Duquesne–Le Gall 一系）把联合收敛带出来。

**技术亮点：**
- 「实值变体」这一步是四两拨千斤：不引入新的重工具，只换一个能吸收振荡的表述，涨落问题立刻可解。
- 得到的是**联合**收敛（量本身与树一起收敛），而不只是边际分布收敛 —— 这保留了极限对象与原树的耦合结构。
- 极限被写成一个具体命名对象（Strahler dilation），便于后续工作引用与比较。

**与关注领域的关联：** 属 **branching process 主线** —— 研究对象是 Galton–Watson 树，缩放极限是稳定 Lévy 树（临界 Galton–Watson 树 / 连续状态分枝过程的谱系树）。

**研究价值：** ⭐⭐⭐⭐（4/5）— 与顶刊长文（67 页）相称的完整工作，且给出了一个会被后续引用的新对象（Strahler dilation）。提醒：这是上一期明确列出的「未收录但值得留意」之一（当时 score 6，恰好卡在收录取线上），本期在新批次下收录；本期它的 score 仍为 6，属主线上分数最低的一篇，收录理由是其主线归属明确而非分数。

---

## 📊 今日关注领域分布

**主线分布：branching process 2 篇，非马氏过程 1 篇，stochastic flow 1 篇，self-interacting random walk 0 篇；紧密邻域 2 篇。**

先说**为什么 self-interacting 留空**。候选池 94 篇里，带 reinforcement / self-interacting / Pólya / excited / self-avoiding 语义的新作只有一篇：arXiv:2610.13884（*Interacting Stochastic Systems with Agent-Based Sampling and Connection-Based Reinforcement*），score **5.0**，低于本栏目设定的 6 分收录取线。按宁缺毋滥原则不收 —— 宁可这一条主线空着，也不拿泛概率或弱相关的论文占位。这是本栏目连续第二期在 self-interacting 一侧缺稿（上期虽有 4 篇命中，但那批来自旧的 10-09 批次）。

再看**四条主线之间的一个意外对称**。本期三条有货的主线，各自那篇论文做的事情其实是同一件：**把一个已知的「首阶律」升级为「极限对象」。** 超过程那篇把瞬时泛函的涨落三分律搬到时间积分泛函上，并发现归一化不变、极限律变了；时变反射扩散那篇把〔MMW23〕的几乎必然增长律强化为 `L²` 收敛，从而拿到二阶矩的精确渐近；Horton–Strahler 那篇把「依概率以 `ln n` 倍数增长」推进到剥离振荡后的联合分布极限。三篇的技术路径完全不同（鞅的典则表示 + Aldous 判据 / 时变表示 + Tauber 型换算 / 换变量 + 树拓扑连续性），但动作的结构一致：**先承认首阶已知，再问「减掉首阶之后剩下什么」。**

**随机性的来源在收缩到单一对象**，这是本期第二个共同点。超过程定理 1.3 的混合高斯过程，随机性只来自一个全局变量 `W^φ_∞`；Bass–Burdzy 那篇把所有 `x` 的局部时锁在同一个白噪声 `𝒲` 上；SBE 那篇的大尺度极限是一个**显式高斯不动点**（重整化群意义上的不动点，随机性完全由高斯结构决定）。三篇都在说：复杂的微观涨落，在极限里只剩下**一个**随机源。DGFF 那篇也可以读进这个模式 —— 条件场重新中心化后收敛回（淬火）DGFF，随机性同样被压回一个已知对象。

**环境的不均匀性是第三个共同点**，而且两篇都为此付出了专门的技术代价。DGFF 那篇的随机电导让模型**失去平移不变性**，作者不得不用条件期望的超调和性另起炉灶；SBE 那篇把非线性从二次放宽到一般增长条件，**连微观方程的适定性都变成要证的命题**。两篇的技术正文里最重的那一段，都不是为了算主项，而是为了**在没有对称性可用的情况下造一个替代品**（超调和性给的锐利下界 / 生成元非二次部分的精细估计）。这是本期方法论上最值得留意的一点。

最后交代**未收录但值得留意**的几篇：
- **Glauber–exclusion 过程的 cutoff**（*Annals of Probability*，DOI: 10.1214/25-aop1803，score 17）—— 这是**连续第二期**因主线优先级让位；若后续某期 interacting particle systems 一侧缺稿，它是首选补位。
- **Phase transition for the late points of random walk**（PTRF，DOI: 10.1007/s00440-026-01490-0，score 6.4）—— 落在 random interlacement 紧密邻域，与上期的 LERW 一文同属一个圈子。
- **Large deviations for additive functionals of one-dimensional zero-range processes**（arXiv:2610.12814，score 16）与 **Higher-Order Gaussian Approximations on Path Space for the Simple Symmetric Exclusion Process**（arXiv:2610.13308，score 15.6）—— 两篇都属相互作用粒子系统的涨落 / 大偏差，本篇因已有 SBE 一篇覆盖 hydrodynamic 一侧而未重复收录。

## 🏆 最值得精读的 1–2 篇

1. **Superdiffusive central limit theorem for a class of driven diffusive systems at the critical dimension（PTRF）** — 本期分量最重的结果。临界维数 `d = 2` 意味着 SBE 在扩散缩放下形式尺度不变，**正则性结构与 paracontrolled 演算两条主流工具都不适用**；作者还要同时越过弱耦合、并把非线性从二次放到一般增长条件。结果是首个非平衡系统的普适性型结论，也是 Hairer–Quastel 首次被推到临界维数之外。想进入「临界奇异 SPDE 的缩放极限」这个方向，它是目前最合适的入口，值得一读的还有它的姊妹篇 arXiv:2501.00344（二次情形，`(log t)^{2/3}` 与 `λ^{4/3}` 前因子在那里得出）。

2. **Functional limit theorems for weighted occupation times of supercritical superprocesses（arXiv:2610.12503）** — 本期候选池最高分（22）。它的价值在于**精确的对照关系**：与线性泛函的涨落定理相比，「三分律的归一化完全相同，但极限律不同」，而且极限多出因子 `λ^{-1}` —— 这个 `λ^{-1}` 就是时间平均 `∫₀ᵗ e^{λ(s−t)} ds` 留下的痕迹，非常干净地说明了「占据时比瞬时泛函多了一层积分」这件事到底改变了什么。想读超临界分枝过程的鞅 / 涨落方法，这一篇的假设体系（(H1)(H2)(M2)）与三层函数空间 `𝒟_S ⊂ 𝒟(λ₁/2,·) ⊂ 𝒟(λ₁,0)` 提供了一个清晰的框架。

（若对**随机流**这条线有兴趣，第三篇推荐 **An infinite-dimensional representation of Ray-Knight theorems for the Bass-Burdzy flow**：它是本期 stochastic flow 主线唯一一篇，篇幅不长（32 页）、问题明确，且把 Ray–Knight 定理、局部时流与 Jacobi 流三样东西串在了一起。）

---

*数据来源：arXiv math.PR 2026-10-12（Mon, 12 Oct 2026）公告批次（40 篇） · Annals of Mathematics RSS（本期 0 条） · Annals of Probability（CrossRef 0091-1798） · Probability Theory and Related Fields（CrossRef 0178-8051） · 机构与卷期页补充自 OpenAlex、CrossRef 与 arXiv HTML 全文 | 抓取与去重：94 篇候选，去重自检 arXiv IDs = 18 / DOIs = 6 / titles = 10 | 生成时间：2026-10-13 04:08 (北京时间)*
