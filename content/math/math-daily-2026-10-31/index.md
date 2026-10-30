---
title: "Math 每日速递 · 2026-10-31"
date: 2026-10-31T03:58:30+08:00
description: "精选4篇：多项式自排斥运动的局部时流、树上多重激励游走的相变、分支随机游走脊柱的极值频率，以及排水网络的 Brownian net 极限。"
categories: ["Math"]
tags: ["math.PR", "自相互作用随机游走", "非马尔可夫过程", "随机流", "分支过程", "Brownian net"]
draft: false
showToc: true
tocopen: true
---

本期精选4篇论文，关注**历史与分支如何改变随机路径的整体行为**：自排斥游走能否由局部时组成的随机流来描述？树的几何与有限次激励如何共同决定常返？在无限分支家系中，一条指定血脉多久会成为空间最小值？大量相关路径的分支与合并，又会形成怎样的连续网络？四篇均核对了原文主要定理，阅读时尤其要区分“构造极限对象”“证明收敛”和“确定出现频率”这三类结论。

## 今日论文

### The Polynomially Self-repelling Motion

{{< paper-meta
  authors="Yaolin Yu"
  source="arXiv 预印本"
  date="2026-10-28 · v1"
  arxiv="2610.38591"
  fulltext="https://arxiv.org/html/2610.38591v1"
  fulltextLabel="全文 v1"
  directions="自相互作用随机游走、非马尔可夫过程、随机流"
>}}

**研究问题与背景：** 多项式自排斥游走倾向于选择走过次数较少的边。此前，一次逆局部时下的空间剖面可以由 Ray–Knight 理论描述，但这不足以确定整条运动：某些在极值处受扰动的 Brownian 运动虽有相同的边际剖面，仍不可能是正确的游走极限。本文的关键是把多个剖面的**联合结构**找出来。

**核心模型与数学设定：** 在整数线上作最近邻游走，一条边已被穿越 {{< math >}}k{{< /math >}} 次时，使用权重 {{< math >}}w(k){{< /math >}}，向左右移动的概率与对应边权成比例。假设 {{< math >}}w{{< /math >}} 为正且不增，并有

{{< math display="true" >}}\begin{gathered}
w(n)^{-1}=n^\alpha\left(1+\frac{2B}{n}+O(n^{-2})\right),\\
\alpha>0,\qquad B\in\mathbb R.
\end{gathered}{{< /math >}}

记 {{< math >}}\mathcal E^k(i){{< /math >}} 为时刻 {{< math >}}i{{< /math >}} 前从 {{< math >}}k{{< /math >}} 到 {{< math >}}k+1{{< /math >}} 的上穿次数，{{< math >}}T_{k,m}{{< /math >}} 为第 {{< math >}}m+1{{< /math >}} 次上穿的时刻。原文式1.4定义空间缩放后的剖面

{{< math display="true" >}}S^N_{r,x}(a)=\frac1N\mathcal E^{\lfloor Nx\rfloor}\!\left(T_{\lfloor Nr\rfloor,\lfloor Na\rfloor}\right).{{< /math >}}

**主要定理与构造：** 定理1.2证明，对任意有限组起点 {{< math >}}(a_i,r_i)\in[0,\infty)\times\mathbb R{{< /math >}}，剖面 {{< math >}}2S^N_{r_i,\cdot}(a_i/2){{< /math >}} 联合弱收敛到由**同一个时空白噪声**驱动的连续 Ray–Knight 曲线。收敛空间是这些空间剖面组成的 {{< math >}}D(\mathbb R)^m{{< /math >}}，采用 Skorokhod {{< math >}}J_1{{< /math >}} 拓扑；因子2和初值的一半来自上穿次数与局部时的归一化。

作者再把正向流与对偶反向流拼接，利用曲线所围区域的面积作为时间，构造多项式自排斥运动（PSRM）。命题4.4给出连续性、对称性、每个空间点被无限次访问，以及扩散自相似性：

{{< math display="true" >}}(X_{ct})_{t\ge0}\overset{d}=\left(\sqrt c\,X_t\right)_{t\ge0},\qquad c>0.{{< /math >}}

定理4.6确认其局部时满足占用密度公式，定理4.8证明 {{< math >}}(X_t,L_t(\cdot)){{< /math >}} 是 Markov 过程。这里完整的局部时剖面承担了记忆状态的作用。

**方法与证明思路：** 用广义 Pólya urn 表示上穿剖面的离散增量，证明驱动随机场的联合极限，再识别共同白噪声下的随机流。流的对偶性、不交叉和空间 Markov 性支撑运动重构。**本文证明的是联合局部时定理及 PSRM 的构造和性质；原文把离散游走整条路径的函数收敛归于另篇并行工作**，本期不将后者算作本文定理。

**与研究主线的关联：** 它把自相互作用游走、记忆状态与随机流连接在同一构造中。只检查单个剖面的分布容易遗漏相关性；共同噪声驱动的联合剖面才是辨认候选极限的关键。

**值得进一步研究的问题：** 本期提出：放宽权重展开的二阶余项后，哪些条件仍足以保持联合剖面极限？这需要重新控制 urn 误差，不能仅凭首项 {{< math >}}w(n)\sim n^{-\alpha}{{< /math >}} 就直接套用本文全部结论。

---

### Multi-excited random walks on general trees

{{< paper-meta
  authors="Jack Mills、Tuan-Minh Nguyen"
  source="arXiv 预印本"
  date="2026-10-29 · v1"
  arxiv="2610.40084"
  fulltext="https://arxiv.org/html/2610.40084v1"
  fulltextLabel="全文 v1"
  directions="自相互作用随机游走、非马尔可夫过程"
>}}

**研究问题与背景：** cookie 随机游走在同一地点被访问的前几次使用特殊偏置，之后恢复简单随机游走。放到树上，决定能否逃向无穷远的不只是激励强度，还包括树的分支几何。本文把两者放进一个可比较的阈值里。

**核心模型与数学设定：** 树无限、局部有限，从根出发。非根顶点 {{< math >}}v{{< /math >}} 的第 {{< math >}}j{{< /math >}} 次访问中，走向父节点与任一子节点的概率比为 {{< math >}}\lambda_v^{(j)}{{< /math >}}。定理1.1针对的具体环境是

{{< math display="true" >}}\begin{gathered}
\lambda_v^{(j)}=1+\alpha_j\deg(v),\\
\alpha_j\ge0\ (1\le j\le M),\qquad \alpha_j=0\ (j>M),\\
D=\sum_{j=1}^{M}\frac{\alpha_j}{1+\alpha_j}.
\end{gathered}{{< /math >}}

因此偏置朝父节点；cookie 用完后各邻居等概率，根处始终均匀选择。树的 branching-ruin number 定义为

{{< math display="true" >}}\operatorname{br}_r(\mathcal T)=\sup\left\{\gamma>0:\inf_{\pi\in\Pi}\sum_{e\in\pi}|e|^{-\gamma}>0\right\},{{< /math >}}

其中 {{< math >}}\Pi{{< /math >}} 是把根与无穷远分开的截集族，{{< math >}}|e|{{< /math >}} 为边的深度。它也等于树边界在原文指定的倒数深度度量下的 Hausdorff 维数，不能与普通指数增长 branching number 混用。

**主要定理：** 定理1.1给出严格阈值两侧的结论：

{{< math display="true" >}}\begin{aligned}
\operatorname{br}_r(\mathcal T)>D+1&\ \Longrightarrow\ \text{几乎必然暂留},\\
\operatorname{br}_r(\mathcal T)<D+1&\ \Longrightarrow\ \text{几乎必然常返}.
\end{aligned}{{< /math >}}

常返指每个顶点被访问无限多次，暂留指每个顶点仅被访问有限多次。可以记作：**树的分支扩张与累计回拉强度竞争。** 这里允许顶点度数没有统一上界，但定理没有覆盖任意 cookie 偏置形式；也没有给出 {{< math >}}\operatorname{br}_r(\mathcal T)=D+1{{< /math >}} 时的一般判定。

**方法与证明思路：** 用 Rubin 指数时钟把游走与有限路径上的限制过程耦合。路径上向后、向前穿越次数形成非齐次 Markov 链；作者用齐次比较链、生成函数和矩界控制破产概率。再构造准独立渗流：截集控制常返一侧，有限能量流给出暂留一侧，最后结合零一律。

**与研究主线的关联：** 它直接处理访问次数造成的历史依赖。亮点是把复杂的逐次激励压缩成 {{< math >}}D{{< /math >}}，并识别与其匹配的树几何量；这里的“有限能量流”是树上的网络流，不是随机微分方程意义下的 stochastic flow。

**值得进一步研究的问题：** 本期提出：临界等号处需要怎样更细的树增长信息？若偏置不再按顶点度数作上述归一化，是否仍有类似的单参数阈值？这两点都不能由本文严格不等式两侧的结论直接推出。

---

### Spine extremality and its frequency in critical branching random walks

{{< paper-meta
  authors="Haoming Zhang"
  source="arXiv 预印本"
  date="2026-10-27 · v1"
  arxiv="2610.37714"
  fulltext="https://arxiv.org/html/2610.37714v1"
  fulltextLabel="全文 v1"
  directions="分支过程"
>}}

**研究问题与背景：** 临界 Galton–Watson 树本身几乎必然灭绝；尺寸偏置后的 Kesten 树则保留一条无限脊柱。给树边加上独立空间位移后，这条“永生血脉”是否会不断成为全体粒子中位置最小的一个？若会，出现次数有多稀疏？

**核心模型与数学设定：** 后代分布 {{< math >}}p_k{{< /math >}} 满足均值1且 {{< math >}}p_1<1{{< /math >}}。在带脊柱的尺寸偏置法则 {{< math >}}\mathbf Q{{< /math >}} 下，脊柱顶点的后代数分布为 {{< math >}}kp_k{{< /math >}}，再均匀选一个孩子延续脊柱；其余孩子生成普通临界家系。边位移独立同分布，独立于树，分布记为 {{< math >}}\mu{{< /math >}}。

记第 {{< math >}}n{{< /math >}} 代脊柱顶点为 {{< math >}}w_n{{< /math >}}，全代的最小位置为 {{< math >}}M_n{{< /math >}}，并定义含并列的极小事件及累计次数

{{< math display="true" >}}\begin{gathered}
A_n=\{V(w_n)=M_n\},\\
D_N=\sum_{n=1}^{N}\mathbf1_{A_n}.
\end{gathered}{{< /math >}}

**主要定理：** 当后代方差 {{< math >}}0<\sigma^2<\infty{{< /math >}}、位移分布不是单点分布时，定理1.1证明

{{< math display="true" >}}\frac{\log D_N}{\log\log N}\longrightarrow1\quad\mathbf Q\text{-几乎处处}.{{< /math >}}

同时 {{< math >}}D_N{{< /math >}} 在概率意义下具有 {{< math >}}\log N{{< /math >}} 的数量级：给定任意高概率水平，可用两个正的常数倍夹住它。**这不是 {{< math >}}D_N/\log N{{< /math >}} 收敛到某个已知常数。** 空间位移无需中心化，也无需任何有限矩；若位移恒定，所有粒子始终并列，反而有 {{< math >}}D_N=N{{< /math >}}，所以非退化条件不能省略。

定理1.2另研究“按字典序选出的那个极小粒子恰为脊柱”的事件 {{< math >}}B_n{{< /math >}}，证明

{{< math display="true" >}}\begin{gathered}
\mathbf Q(B_n)=q_n,\qquad q_n=\mathbf P(Z_n>0),\\
B_n\text{ 无限次发生}\quad\Longleftrightarrow\quad\sum_nq_n=\infty
\end{gathered}{{< /math >}}

后一个判据按定理的零一概率结论理解，且不要求有限后代方差。不能把 {{< math >}}\mathbf Q(B_n)=q_n{{< /math >}} 直接改写成含并列事件 {{< math >}}A_n{{< /math >}} 的等式。

定理1.5还给出一个明确的无限方差族：后代生成函数 {{< math >}}f(s)=s+c(1-s)^\alpha{{< /math >}}，其中 {{< math >}}1<\alpha<2{{< /math >}}、{{< math >}}0<c\le1/\alpha{{< /math >}}。对任意非恒定位移分布，含并列极小事件只发生有限次。它展示了不同方差机制的反差，并非所有无限方差后代律的完整分类。

**方法与证明思路：** 脊柱分解把指定极小事件与普通树的生存概率联系起来；多时刻概率上界和停时计数估计控制频率。为处理并列，需要额外控制普通存活家系中极小粒子的重数，不能只照搬连续位移下无并列的论证。

**与研究主线的关联：** 这是分支过程的家系偏置与空间极值之间的直接联系：普通临界种群的生存概率，决定了尺寸偏置树上指定血脉成为极值的机会。

**值得进一步研究的问题：** 作者在第11节明确留下了非恒定位移、有限后代方差情形的精确频率常数与极限分布问题。读到 {{< math >}}(\log N)^{1+o(1)}{{< /math >}} 时，应把这些更精细结论继续视为未定。

---

### Convergence of a drainage network model with branching to the Brownian net

{{< paper-meta
  authors="Krishnamurthi Ravishankar、Kumarjit Saha"
  source="arXiv 预印本"
  date="2026-10-29 · v1"
  arxiv="2610.40555"
  fulltext="https://arxiv.org/html/2610.40555v1"
  fulltextLabel="全文 v1"
  directions="分支过程"
>}}

**研究问题与背景：** Brownian web 描述从时空各处出发、相遇后合并的 Brownian 路径；Brownian net 进一步允许分支。本文研究一个排水网络：路径在合并以前已经通过共享环境产生长程相关。此前只知道某些缩放子极限“包含”一个 Brownian net，本文证明整个极限恰好就是它。

**核心模型与数学设定：** 在 {{< math >}}\mathbb Z\times\mathbb Z{{< /math >}} 的空间—时间格点上，各点独立地以概率 {{< math >}}p\in(0,1){{< /math >}} 开放。路径每次连接到下一层最近的开放点；左右同样近时，通常用独立公平符号选择方向。只有在这种平局顶点，以概率 {{< math >}}\beta_n{{< /math >}} 同时保留左右两条边，形成分支。

取扩散尺度 {{< math >}}\epsilon_n\downarrow0{{< /math >}}，时间乘 {{< math >}}\epsilon_n^2{{< /math >}}，空间按原文式4–5的 {{< math >}}\epsilon_n/\sigma(p){{< /math >}} 归一化，并要求

{{< math display="true" >}}\frac{\beta_n}{\epsilon_n}\longrightarrow b\in[0,\infty).{{< /math >}}

这里 {{< math >}}\beta_n{{< /math >}} 是平局点的条件分支概率，不能把它当成每个格点均会分支的概率。

**主要定理：** 定理1.2证明，所有离散路径组成的集合经缩放并取闭包后，作为路径空间紧子集中的随机元素，依分布收敛；该空间采用原文第2节的 Hausdorff 度量。

- 若 {{< math >}}b=0{{< /math >}}，极限为标准 Brownian web。
- 若 {{< math >}}b>0{{< /math >}}，极限为漂移参数如下的 Brownian net：

{{< math display="true" >}}\bar b=b\frac{1-p}{(2-p)^2}.{{< /math >}}

这是**整个随机路径集合的收敛**，不只是单条路径的 Brownian 极限，也不只是证明极限中至少存在一个 net。结论覆盖上述有限比率极限，没有把 {{< math >}}\beta_n/\epsilon_n\to\infty{{< /math >}} 一并处理。

**方法与证明思路：** 作者分析网络的对偶路径，细分两条相关路径的联合演化，并控制它们的相互作用时间。通过左右极端路径与对偶结构的收敛，把“包含目标 net”推进到完整识别，排除额外路径。共享下一层开放环境使得不同路径即使尚未相遇也有关联，这是与相遇前独立的分支合并游走的重要区别。

**与研究主线的关联：** 它直接研究分支—合并系统的连续极限，说明较复杂的空间依赖仍可能进入 Brownian net 的吸引域。这里的分支对象是整套相互作用路径，而非独立繁殖的 Galton–Watson 种群。

**值得进一步研究的问题：** 本期提出：若开放环境本身具有空间相关性，哪些可检验的混合条件仍足以控制对偶路径的相互作用，并保留同样的极限？本文的独立 Bernoulli 环境定理不能直接回答这一推广。

## 本期观察

两篇游走论文都用辅助过程整理历史信息：一篇保留整套局部时剖面的联合规律，另一篇研究路径上的穿越次数链。两篇分支论文则提醒我们区分观察对象：指定脊柱的极值次数与所有路径构成的网络，适用的归一化、收敛空间和结论强度各不相同。

## 阅读建议

- 研究自相互作用与随机流，先读 PSRM 的定理1.2，再看第4节如何从局部时流重构运动。
- 研究记忆游走的相变，读树上 cookie 模型的定理1.1，先核对偏置方向和临界等号的边界。
- 研究分支空间结构，可比较脊柱频率定理1.1与排水网络定理1.2：前者是单条家系线的几乎处处计数，后者是整套路径的依分布极限。
