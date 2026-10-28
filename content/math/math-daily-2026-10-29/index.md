---
title: "Math 每日速递 · 2026-10-29"
date: 2026-10-29T03:58:14+08:00
description: "精选3篇：一次强化游走的精确迭代对数律、临界分支随机游走与渗流的命中概率，以及带记忆平均场博弈的均衡与有限粒子近似。"
categories: ["Math"]
tags: ["math.PR", "自相互作用随机游走", "分支过程", "非马尔可夫过程", "Volterra方程"]
draft: false
showToc: true
tocopen: true
---

本期精选3篇论文，关注**如何把复杂的路径依赖与群体结构，转化为可计算的概率量**：一次强化游走探索新空间的速度，哪些极限常数会随强化强度改变？临界分支随机游走与渗流簇，能否用同一种容量衡量命中概率？带记忆的群体博弈，又何时存在唯一均衡？三篇均核对了原文主要定理，阅读时可依次抓住“逆过程、容量、状态提升”这三个工具。

## 今日论文

### Laws of the iterated logarithm for the range of once-reinforced random walk on ℤ

{{< paper-meta
  authors="Ze-Chun Hu、Renming Song、Li Wang"
  source="arXiv 预印本"
  date="2026-10-27 · v1"
  arxiv="2610.36790"
  fulltext="https://arxiv.org/html/2610.36790v1"
  fulltextLabel="全文 v1"
  directions="自相互作用随机游走、非马尔可夫过程"
>}}

**研究问题与背景：** 一次强化随机游走（once-reinforced random walk，ORRW）只在边第一次被走过后改变其权重。已有标度极限和矩渐近描述了大致的扩散尺度；本文进一步给出单条无限轨迹上，探索范围的精确上下包络。这类几乎处处结论不能直接从弱收敛推出。

**核心模型与数学设定：** 在整数线上从0出发，未走过的边权重为1，走过后的权重永久变为 {{< math >}}c>0{{< /math >}}，下一步按相邻边的权重比例选择方向。{{< math >}}c>1{{< /math >}} 对应吸引，{{< math >}}0<c<1{{< /math >}} 对应排斥。定义

{{< math display="true" >}}\begin{gathered}
M_n=\max_{j\le n}X_j,\qquad m_n=\min_{j\le n}X_j,\\
R_n=M_n-m_n,\qquad S_k=\inf\{n:R_n=k\}.
\end{gathered}{{< /math >}}

这里 {{< math >}}R_n{{< /math >}} 是已访问区间的长度，访问过的格点数是 {{< math >}}R_n+1{{< /math >}}。区间内部仍是对称游走，强化只在当前两个端点影响向外扩张的概率。

**主要定理：** 对每个固定的 {{< math >}}c>0{{< /math >}}，定理1.1证明 Chung 型迭代对数律，几乎处处有

{{< math display="true" >}}\liminf_{n\to\infty}\frac{R_n}{\sqrt{n/\log\log n}}=\frac{\pi}{\sqrt2}.{{< /math >}}

定理1.3证明 Hartman–Wintner 型上包络，几乎处处有

{{< math display="true" >}}\limsup_{n\to\infty}\frac{R_n}{\sqrt{2n\log\log n}}=\frac1c.{{< /math >}}

可以这样记：**最慢扩张的极限常数不随强化强度改变，最快扩张的常数则与强化参数成反比。** 两个结论分别使用不同归一化，不能把它们合并成某个确定的日常增长速度。{{< math >}}c=1{{< /math >}} 时恢复简单对称游走范围的对应结论。

**方法与证明思路：** 先研究“范围扩到 {{< math >}}k{{< /math >}} 要等多久”，而非直接研究位置。引理2.1把逆范围 {{< math >}}S_k{{< /math >}} 分解为独立、但不同分布的等待时间之和。作者对生成函数作尖锐估计：谱估计和一次异常漫长的穿越控制一侧包络；稀疏独立区块上的指数倾斜控制集体小偏差；最后利用单调反演回到 {{< math >}}R_n{{< /math >}}。

**与研究主线的关联：** 这是自相互作用游走的直接结果。历史通过“哪些边已经访问过”改变转移概率，但逆探索时间恰好保留独立增量结构，为处理记忆提供了一个具体入口。

**值得进一步研究的问题：** 本期提出：若左右端点使用不同强化参数，两种包络常数分别如何变化？推广时首先要确认逆范围增量是否仍可独立分解，不能直接套用本文的对称模型公式。

---

### High-dimensional critical percolation and critical Branching random walks are intersection equivalent

{{< paper-meta
  authors="Bruno Schapira"
  source="arXiv 预印本"
  date="2026-10-27 · v1"
  arxiv="2610.37133"
  fulltext="https://arxiv.org/html/2610.37133v1"
  fulltextLabel="全文 v1"
  directions="分支过程"
>}}

**研究问题与背景：** 高维临界渗流簇与临界分支随机游走在宏观极限中有许多相似性。本文问得更局部：不先缩放整个随机集合，从远处出发时，它们碰到同一个有限目标的概率，是否始终只相差一个常数倍？

**核心模型与数学设定：** 在 {{< math >}}\mathbb Z^d{{< /math >}}、{{< math >}}d>6{{< /math >}} 上研究临界键渗流，记从 {{< math >}}x{{< /math >}} 出发的簇为 {{< math >}}\mathcal C(x){{< /math >}}。另取均值为1、有限方差的 Galton–Watson 家系树，以最近邻简单随机游走标记树边，所得空间访问集合记为 {{< math >}}\mathcal R_c^x{{< /math >}}。这里下标 {{< math >}}c{{< /math >}} 表示临界对象，与上一篇的强化参数无关。

关键假设是渗流两点连通函数与简单随机游走 Green 函数同阶：

{{< math display="true" >}}\tau(x,y):=\mathbb P(x\leftrightarrow y)\asymp g(x,y).{{< /math >}}

原文明确把这作为假设；不能只凭 {{< math >}}d>6{{< /math >}} 就宣称所有最近邻模型均已无条件满足它。

**主要定理：** 定理1.1表明，存在常数 {{< math >}}C>0{{< /math >}}，对有限集合 {{< math >}}A{{< /math >}} 及满足 {{< math >}}\|x\|\ge C\max_{a\in A}\|a\|{{< /math >}} 的远处起点，

{{< math display="true" >}}\begin{gathered}
\mathbb P(\mathcal C(x)\cap A\ne\varnothing)\\
\asymp\mathbb P(\mathcal R_c^x\cap A\ne\varnothing)\\
\asymp\frac{\operatorname{Cap}_{d-4}(A)}{\|x\|^{d-2}}.
\end{gathered}{{< /math >}}

同阶常数对上述目标与起点统一；并不是说两个概率之比趋于1。容量由核 {{< math >}}(1+\|a-b\|)^{4-d}{{< /math >}} 定义，刻画目标集合的几何形状对命中概率的影响。

本文补齐的关键是渗流侧的上界。定理1.4甚至对任意 {{< math >}}x\notin A{{< /math >}} 给出

{{< math display="true" >}}\mathbb P(\mathcal C(x)\cap A\ne\varnothing)\le C\frac{\operatorname{Cap}_{d-4}(A)}{\operatorname{dist}(x,A)^{d-2}}.{{< /math >}}

但这项无远距限制的**单侧上界**，不能据此扩大成任意近处目标都有统一双侧比较。原文推论1.2还比较了 p-capacity 与上述容量，不过额外使用更强的两点函数比值极限假设。

**方法与证明思路：** 作者构造依赖目标点排序的截断平衡测度，以离开大球的“先驱点”数量代替普通游走的逃逸概率。定理1.3建立近似最后离开公式所需的势能界。证明把空间分成同心环带，一方面统计各环带目标的容量，另一方面估计避开后续环带的代价，再把贡献求和。它通过共同容量连接两种对象，并未构造二者的直接路径耦合。

**与研究主线的关联：** 直接研究临界分支随机游走的空间访问结构，并把分支势理论中的命中估计迁移到高维渗流。若关心分支种群触及稀疏目标的概率，这种“先找正确容量，再比较模型”的路线尤其值得参考。

**值得进一步研究的问题：** 本期提出：对有明确几何结构的目标族，能否进一步确定比较中的精确渐近常数？直接耦合则是作者讨论过的困难方向，本文未解决；也不能将这里的命中概率比较解释为随机集合具有相同分布。

---

### Linear-quadratic mean field games with Volterra dynamics

{{< paper-meta
  authors="Niccolò Fontana、Mattia Martini、Huyên Pham"
  source="arXiv 预印本"
  date="2026-10-27 · v1"
  arxiv="2610.37622"
  fulltext="https://arxiv.org/html/2610.37622v1"
  fulltextLabel="全文 v1"
  directions="非马尔可夫过程"
  note="10月28日跨分类公告"
>}}

**研究问题与背景：** 平均场博弈用一个代表性个体与总体均值之间的自洽关系，近似大量个体的策略互动。若个体的当前状态还受过去决策影响，普通有限维 Markov 状态就不够用了。本文允许奇异记忆核，而且控制、个体状态和总体均值都可以进入扩散系数。

**核心模型与数学设定：** 给定确定性的总体均值曲线 {{< math >}}m{{< /math >}}，代表性个体的状态 {{< math >}}X_t\in\mathbb R^d{{< /math >}} 满足卷积型随机 Volterra 方程。为便于阅读，将原文式2.5写成

{{< math display="true" >}}\begin{gathered}
X_t=g_0(t)+\int_0^t K(t-s)b_s\,ds\\
\qquad+\int_0^t K(t-s)\sigma_s\,dW_s,\\
b_s=\beta(s)+B(X_s-m_s)+C\alpha_s,\\
\sigma_s=\gamma(s)+D(X_s-m_s)+F\alpha_s.
\end{gathered}{{< /math >}}

控制 {{< math >}}\alpha_s\in\mathbb R^q{{< /math >}} 适应整个噪声系统，满足一致四阶矩界；各个体由独立的一维 Brownian 运动驱动。成本对状态和控制为二次型，状态权重 {{< math >}}Q\ge0{{< /math >}}，控制权重 {{< math >}}R\ge\lambda I{{< /math >}}（{{< math >}}\lambda>0{{< /math >}}）；初始曲线连续，外源系数有界可测，系数矩阵固定。冻结均值后，成本中的纯均值项是与控制无关的加项。

假设2.4要求核完全单调，可表示为指数核混合，并满足额外矩条件：

{{< math display="true" >}}\begin{gathered}
K(t)=\int_0^\infty e^{-t\theta}\mu(d\theta),\\
\exists\zeta\in(0,1/4):\quad\int_0^\infty(1\wedge\theta^{-\zeta})\mu(d\theta)<\infty.
\end{gathered}{{< /math >}}

例如分数核 {{< math >}}K(t)=t^{H-1/2}/\Gamma(H+1/2){{< /math >}} 在本文覆盖的参数是 {{< math >}}H\in(1/4,1/2){{< /math >}}，不能把结论泛化到任意粗糙程度。

**主要定理：**

- **短时间均衡，定理2.7：** 在上述核与系数假设下，若 {{< math >}}\rho_T=\operatorname{Lip}_\psi\|K\|_{L^1(0,T)}<1{{< /math >}}，平均场博弈存在唯一解。该收缩条件在充分短的时间区间成立，不等于一般情形下任意时长都成立。
- **任意时长的充分条件，定理3.11：** 若 {{< math >}}F=0{{< /math >}}，且 {{< math >}}B=-P{{< /math >}}，其中 {{< math >}}P{{< /math >}} 对称半正定并与 {{< math >}}CR^{-1}C^\top{{< /math >}} 对易，则每个有限 {{< math >}}T>0{{< /math >}} 都有唯一均衡。一维时对易自动成立，只需 {{< math >}}B\le0{{< /math >}}。扩散仍可依赖状态与均值。
- **有限群体近似，定理2.8：** 只要平均场均衡存在，把其反馈策略应用于每个个体自己的提升状态，就得到 {{< math >}}\varepsilon_N\le cN^{-1/2}{{< /math >}} 的近似 Nash 均衡。常数与 {{< math >}}N{{< /math >}} 无关，但可依赖固定时长、模型数据及所选均衡；这一结论本身不要求均衡唯一。

有限群体结论按闭环约定理解：一个玩家偏离时，其他玩家保留反馈函数，并把它应用于变化后的自身状态。这里的“自身状态”指包含历史信息的提升状态，不只是当前有限维 {{< math >}}X_t{{< /math >}}。

**方法与证明思路：** 利用指数核混合，把记忆编码为连续族辅助状态，在 {{< math >}}L^1_\mu{{< /math >}} 空间恢复 Markov 性。先冻结均值，用 Banach 空间 Riccati 方程求仿射最优反馈；再求解均值的前向—后向不动点。短时用收缩，任意时长的特例用 Fredholm 备择与能量恒等式。最后在提升空间证明定量传播混沌：命题4.2对 {{< math >}}p=2,3,4{{< /math >}} 给出状态差的 {{< math >}}p{{< /math >}} 阶矩为 {{< math >}}O(N^{-p/2}){{< /math >}}，支撑近似 Nash 误差估计。

**与研究主线的关联：** 核心是非马尔可夫动力学的控制与群体极限。状态提升并没有抹掉记忆，而是把历史整理成能继续演化的状态；有限维投影一般仍不具有 Markov 性。

**值得进一步研究的问题：** 本期提出：将连续指数混合近似为有限个指数核时，核近似误差与 {{< math >}}N^{-1/2}{{< /math >}} 的群体近似误差能否统一控制？这涉及维数截断与粒子数两种极限，本文的近似 Nash 定理没有自动给出二者的联合误差。

## 本期观察

三篇的共同做法，是寻找能保留主要信息的中间对象：强化游走的逆范围、分支与渗流共有的容量、Volterra 方程的提升状态。阅读时除了记住最终极限，还应检查这个中间对象保留了什么、比较又在哪一步需要额外假设。本期没有直接聚焦随机流正则性与稳定性的论文。

## 阅读建议

- 先读一次强化游走：对照定理1.1与1.3，理解为什么同一个参数只出现在其中一种包络常数里。
- 关注分支空间结构时，读命中概率比较：先看定理1.1和1.4，区分远处的双侧比较与任意起点的单侧上界。
- 研究记忆方程与控制时，读 Volterra 平均场博弈：重点核对假设2.4、短时收缩条件，以及反馈真正依赖的提升状态。
