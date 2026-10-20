---
title: "Math 每日速递 · 2026-10-21"
date: "2026-10-21T04:38:25+08:00"
description: "精选2篇：随机环境分支过程的精确左尾，以及局部平均扩张下随机映射的指数记忆消失。"
categories: ["Math"]
tags: ["math.PR", "分支过程", "随机环境", "随机流", "随机动力系统", "耦合"]
draft: false
showToc: true
tocopen: true
---

本期精选 **2 篇**，分别关注**随机环境中的缓慢增长与初始记忆的消失**：超临界种群虽然长期增长，归一化后的极限为何仍可能非常小？随机映射即使允许局部收缩，又在什么条件下能指数忘记初始分布？前者要分清平均环境后的尾部与固定环境的行为，后者要分清分布趋近与轨道同步。两篇都值得从条件、归一化和概率层次入手阅读。

## 今日论文

### Left tail asymptotics for the density of supercritical branching processes in random environment

{{< paper-meta
  authors="Panyi Chen、Mei Zhang"
  source="arXiv 预印本"
  date="2026-10-19 · v1"
  arxiv="2610.25848"
  fulltext="https://arxiv.org/html/2610.25848v1"
  fulltextLabel="全文 v1"
  directions="分支过程"
>}}

**研究问题与背景：** 超临界分支过程的归一化种群趋于鞅极限，但这个极限仍可能接近零。本文求出随机环境平均后的精确左尾，尤其是密度的首项渐近；它比只确定负阶矩何时有限更细致。

**核心模型与数学设定：** 环境序列独立同分布。给定环境，第 {{< math >}}n{{< /math >}} 代个体独立按该代共同的后代分布繁殖。从一个个体出发，记环境下的后代均值为 {{< math >}}m_n{{< /math >}}，并令

{{< math display="true" >}}
\Pi_n=\prod_{j=0}^{n-1}m_j,\qquad W_n=Z_n/\Pi_n,\qquad W=\lim_nW_n.
{{< /math >}}

论文假设每个个体至少有一个后代，即 {{< math >}}p_0=0{{< /math >}}；{{< math >}}p_1>0{{< /math >}} 几乎必然且 {{< math >}}\operatorname{ess\,sup}p_1<1{{< /math >}}。假设1.1要求存在 {{< math >}}\delta>1{{< /math >}} 和有限常数，使

{{< math display="true" >}}
1<\underline m\le m_0\le\overline m,\qquad
m_0(\delta)\le\overline m^{\delta},
{{< /math >}}

其中 {{< math >}}m_0(\delta)=\sum_{j\ge0}j^\delta p_j{{< /math >}}。假设1.2还要求 {{< math >}}\log m_0{{< /math >}} 非格点；环境随机游走非退化。原文的 {{< math >}}Z_1\log^+Z_1/m_0{{< /math >}} 可积条件保证鞅的 {{< math >}}L^1{{< /math >}} 收敛，在上述一致高阶矩条件下也得到控制。这些结论不覆盖允许灭绝的任意随机环境模型。

**主要定理或理论结果：** **定理1.1**中，{{< math >}}a_0>0{{< /math >}} 由环境平均方程

{{< math display="true" >}}
\mathbb E[p_1m_0^{a_0}]=1
{{< /math >}}

唯一确定。{{< math >}}W{{< /math >}} 的 annealed 分布绝对连续，密度 {{< math >}}w{{< /math >}} 可取为 {{< math >}}(0,\infty){{< /math >}} 上连续函数，且当 {{< math >}}x\downarrow0{{< /math >}} 时

{{< math display="true" >}}
\begin{gathered}
\mathbb P(W\le x)\sim D x^{a_0},\\
w(x)\sim a_0D x^{a_0-1},\qquad 0<D<\infty.
\end{gathered}
{{< /math >}}

这里平均的是整个环境分布；不能把指数替换成某个固定环境的参数，也不能未经证明对分布函数渐近直接求导得到密度渐近。

**方法与证明思路：** 从第一代分解得到更新方程，再以 {{< math >}}p_1m_0^{a_0}{{< /math >}} 倾斜环境分布，应用关键更新定理。密度部分另外控制 quenched 特征函数与卷积密度。子树给定未来环境时独立，但在 annealed 层面共享同一未来环境，通常并不独立，这一点影响递推的使用。

**与研究主线的关联：** 直接刻画随机环境分支过程的极限分布与小值事件，把环境波动如何进入尾指数写成可核验的方程。

**值得进一步研究的问题：** **本期提出：** 若 {{< math >}}\log m_0{{< /math >}} 为格点分布，常数首项是否应替换为周期调制？本文的非格点定理不能直接回答，原文也对照了附加解析条件下已有的周期展开工作。

---

### Exponential loss of memory for random Lasota--Yorke convex maps with local average expansion

{{< paper-meta
  authors="Hongfei Cui、Juho Leppänen"
  source="arXiv 预印本"
  date="2026-10-18 · v1"
  arxiv="2610.25037"
  fulltext="https://arxiv.org/html/2610.25037v1"
  fulltextLabel="全文 v1"
  directions="随机流、随机动力系统"
  note="本篇研究离散时间、可非可逆的随机映射复合；不属于连续时间微分同胚流。"
>}}

**研究问题与背景：** 每一步都扩张，常能帮助系统忘记初始分布；但实际随机组合可能夹杂收缩映射。本文用原点附近的平均扩张和耦合，证明某类随机区间映射仍有指数记忆消失。这里的“记忆”指初始密度的影响，并不表示转移本身有历史强化。

**核心模型与数学设定：** 独立同分布环境选择映射 {{< math >}}T_\xi:[0,1]\to[0,1]{{< /math >}}。假设(H1)要求有限分支上 {{< math >}}C^1{{< /math >}}、凸且递增；首分支从0出发覆盖 {{< math >}}(0,1){{< /math >}}，其余分支的左端极限为0、右导数为正。

假设(H2)控制首分支长度下界、末端导数上界，并一致控制其余分支的加权逆导数和。具体地，存在与环境无关的 {{< math >}}a\in(0,1){{< /math >}}、{{< math >}}M_1>1{{< /math >}}、{{< math >}}M>0{{< /math >}}，满足

{{< math display="true" >}}
\begin{gathered}
a_{\xi,1}\ge a,\qquad T'_{\xi,1}(a_{\xi,1}-)\le M_1,\\
\sum_{i=2}^{N_\xi}\frac1{T'_{\xi,i}(a_{\xi,i-1}+)a_{\xi,i-1}}\le M.
\end{gathered}
{{< /math >}}

关键的(H3)为

{{< math display="true" >}}
\lambda_\xi=T'_{\xi,1}(0+)>0,\qquad
\theta=\mathbb E[\lambda_\xi^{-1}]<1.
{{< /math >}}

这比只说“平均导数大于1”更具体；不能把不同平均条件随意互换。还要求映射对环境及状态联合可测。

**主要定理或理论结果：** 记 {{< math >}}\mathcal L_\omega^n{{< /math >}} 为沿环境序列的转移算子乘积，{{< math >}}\mathcal D_B{{< /math >}} 为非负、非增、积分为1且高度不超过 {{< math >}}B{{< /math >}} 的密度类。**定理2.1**给出某个 {{< math >}}\rho\in(0,1){{< /math >}} 使

{{< math display="true" >}}
\mathbb E\|\mathcal L_\omega^n(f-g)\|_1\le C_B\rho^n.
{{< /math >}}

同时存在 {{< math >}}c>0{{< /math >}} 及可积随机系数 {{< math >}}C_{B,c}(\omega){{< /math >}}，对几乎每条环境序列、所有 {{< math >}}f,g\in\mathcal D_B{{< /math >}} 与所有 {{< math >}}n\ge0{{< /math >}}，

{{< math display="true" >}}
\|\mathcal L_\omega^n(f-g)\|_1\le C_{B,c}(\omega)e^{-cn}.
{{< /math >}}

前者是 annealed，后者是 quenched；随机前因子不能删去。第5节的引理5.1及推论5.2将结论推广到有界变差的初始密度。它们描述分布距离衰减，不等于同噪声下任意两条点轨道指数同步。

**方法与证明思路：** 固定长度分块，在“好块”耦合两密度的共同质量；坏块可能增加密度高度，因此同时控制未耦合质量与原点附近集中度，建立条件期望收缩。最后将零积分 BV 函数写成两个单调密度之差，扩展估计。

**与研究主线的关联：** 属于随机动力系统的耦合与统计稳定性，提供允许局部收缩时的 quenched 控制。其分段、非可逆结构与微分同胚流存在区别，借用方法时应保留这些边界。

**值得进一步研究的问题：** **本期提出：** 若环境有相关性，好块的条件概率下界还能否成立？本文证明使用独立同分布环境，不能直接推广到任意相关环境。

## 本期观察

两篇的共同阅读线索是 **quenched 与 annealed 的区别**：环境平均后的精确尾部，不自动给出逐环境同样的常数；逐环境的指数记忆消失，也保留了依赖环境的随机系数。

## 阅读建议

- 分支方向：先核对第一篇假设1.1–1.2及定理1.1，再读分布渐近与密度渐近为何需要不同估计。
- 随机动力系统方向：先读第二篇(H1)–(H3)及定理2.1，再看第4节如何同步控制质量和密度高度。
