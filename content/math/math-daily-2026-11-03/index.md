---
title: "Math 每日速递 · 2026-11-03"
date: 2026-11-03T03:59:47+08:00
description: "精选3篇：临界奇异SDE的随机同胚流与强解反例、双历史片段切换过程的不变测度，以及循环催化分支SPDE的路径唯一性。"
categories: ["Math"]
tags: ["math.PR", "随机流", "非马尔可夫过程", "分支过程", "奇异SDE", "催化分支"]
draft: false
showToc: true
tocopen: true
---

本期精选3篇论文，关注**随机动力学何时能被同一份噪声确定，又何时能忘记初始历史**：奇异漂移下，强解与随机流需要什么额外条件？状态和环境都带记忆时，如何证明趋于平衡？催化分支密度接近零时，平方根噪声的奇异性又如何控制？三篇均核对了原文主要定理，阅读重点是区分弱唯一、路径唯一、强构造与长期收敛各自所需的条件。

## 今日论文

### Strong solvability and its failure for critical SDEs

{{< paper-meta
  authors="Dejun Luo、Guohuan Zhao"
  source="arXiv 预印本"
  date="2026-10-30 · v1"
  arxiv="2610.41128"
  fulltext="https://arxiv.org/html/2610.41128v1"
  fulltextLabel="全文 v1"
  directions="随机流"
>}}

**研究问题与背景：** 噪声可以改善奇异漂移下的适定性，但“给定分布能确定解”与“给定 Brownian 路径能确定解”是两件事。本文一方面在小二次型界条件下构造正向、逆向随机流，另一方面给出临界可积条件下弱唯一却没有强解的反例，划清这两种结论的边界。

**核心模型与数学设定：** 在 {{< math >}}\mathbb R^d{{< /math >}} 上考虑 Stratonovich 方程

{{< math display="true" >}}\mathrm dX_t=b(t,X_t)\,\mathrm dt+\sum_{k=1}^{d}\sigma_k(t,X_t)\circ\mathrm dW_t^k.{{< /math >}}

原文以对应的 Itô 方程定义它，漂移为 {{< math >}}\widehat b=b+\tfrac12\sum_k(\nabla\sigma_k)\sigma_k{{< /math >}}。假设1要求扩散一致椭圆且有界，并要求 {{< math >}}b{{< /math >}} 与 {{< math >}}\nabla\sigma{{< /math >}} 满足共同的小二次型界：对几乎处处的时间和任意 {{< math >}}\phi\in H^1(\mathbb R^d){{< /math >}}，

{{< math display="true" >}}\begin{gathered}\int |v(t,x)|^2\phi(x)^2\,\mathrm dx\\
\leq\delta\int|\nabla\phi|^2\,\mathrm dx+g(t)\int\phi^2\,\mathrm dx.\end{gathered}{{< /math >}}

其中 {{< math >}}v=b,\nabla\sigma{{< /math >}}，{{< math >}}g\geq0{{< /math >}} 且 {{< math >}}g\in L^1(0,T){{< /math >}}；小参数阈值依赖维数和椭圆性常数。

**主要定理与理论结果：** 定理1.2证明，当 {{< math >}}\delta{{< /math >}} 足够小时，可以在原 Wiener 空间上构造联合连续的 {{< math >}}X_{s,t}{{< /math >}} 与逆映射 {{< math >}}Y_{s,t}{{< /math >}}，满足流的复合关系，且每个 {{< math >}}X_{s,t}{{< /math >}} 都是同胚。正逆映射具有局部 {{< math >}}W^{1,P}{{< /math >}} 矩界，其中 {{< math >}}P=50(d+1){{< /math >}}。原文的联合分布唯一性和路径唯一性限定在满足式1.2的 Krylov 估计类 {{< math >}}\mathscr K_2(s,x){{< /math >}} 中；不能省略这个解类，也不能把同胚升级成经典微分同胚。

定理1.4给出相反方向的例子：对每个 {{< math >}}d\geq2{{< /math >}}，存在无散漂移 {{< math >}}b\in L^\infty_tL^d_x{{< /math >}}，使

{{< math display="true" >}}X_t=\int_0^t b(r,X_r)\,\mathrm dr+W_t,\qquad X_0=0{{< /math >}}

在 {{< math >}}[0,1]{{< /math >}} 上有连续、分布唯一的弱解，却没有适应于驱动 Brownian 运动自然滤过的解。漂移还可在正时间上光滑。因此，无散性与临界空间成员资格本身，并不足以替代强构造所需的额外控制。

**方法与证明思路：** 正向结果以正逆流导数的抛物型矩估计和 Wiener 泛函紧性为核心，通过二次型小性吸收能量项，再传递复合与逆映射恒等式。反例用对数时间缩放，把强可解性转成平稳扩散的样本测度是否为 Dirac 质量的问题；正的最大 Lyapunov 指数与随机 SRB 理论排除这种集中。

**与研究主线的关联：** 论文直接研究奇异系数下随机流的存在、可逆性与 Sobolev 正则性，同时展示“弱解已唯一”仍不能自动产生按噪声实现的流。

**值得进一步研究的问题：** 本期提出：哪些可检验的临界漂移条件能取代二次型小性，仍同时保留正逆流的矩界？研究时应分别检查强存在与指定解类中的唯一性，不能由弱唯一直接跳到路径唯一。

---

### Invariant probability measures for path-dependent regime-switching processes

{{< paper-meta
  authors="Jianrui Li、Jinghai Shao"
  source="arXiv 预印本"
  date="2026-10-30 · v1"
  arxiv="2610.41515"
  fulltext="https://arxiv.org/html/2610.41515v1"
  fulltextLabel="全文 v1"
  directions="非马尔可夫过程"
>}}

**研究问题与背景：** 系统可能既依赖过去的连续状态，也依赖过去经历的环境。只把当前环境加入状态，仍不足以恢复 Markov 性。本文将两段历史一起作为状态，研究不变测度及 Wasserstein 收敛，并以保序截断处理可数无穷环境。

**核心模型与数学设定：** 固定有限延迟 {{< math >}}\tau_0>0{{< /math >}}，令 {{< math >}}X_t(r)=X(t+r){{< /math >}}、{{< math >}}\Lambda_t(r)=\Lambda(t+r){{< /math >}}，{{< math >}}r\in[-\tau_0,0]{{< /math >}}。方程为

{{< math display="true" >}}\mathrm dX(t)=b(X_t,\Lambda_t)\,\mathrm dt+\sigma(X_t,\Lambda_t)\,\mathrm dW(t).{{< /math >}}

{{< math >}}W{{< /math >}} 与连续时间切换链 {{< math >}}\Lambda{{< /math >}} 独立；后者状态空间可有限，也可为 {{< math >}}\mathbb N{{< /math >}}。扩充状态位于连续路径空间与 càdlàg 环境路径空间的乘积，距离由连续片段的上确界范数与环境片段的 Skorokhod 距离相加。

原文条件包括：切换链不可约、保守且总跳率一致有界；存在能控制耦合时间指数矩的有界耦合 Lyapunov 函数；(H1)控制连续状态差的当前耗散与延迟项，(H2)给出增长界，(H3)控制系数对环境片段的连续依赖。条件(H1)允许部分环境的耗散系数为正，并非要求每种环境单独稳定。

**主要定理与理论结果：** 命题2.5确认 {{< math >}}(X_t,\Lambda_t){{< /math >}} 在片段空间中具有 Markov 性。有限环境下，定理3.5要求带延迟修正的矩阵 {{< math >}}Q_1{{< /math >}} 具有正的谱衰减参数 {{< math >}}\eta_1{{< /math >}}。对适当的耦合时间参数 {{< math >}}\lambda>0{{< /math >}}，经过原文规定的初始时间阈值后，任意具有有限一阶矩的初始分布，其 {{< math >}}W_1{{< /math >}} 距离以指数率

{{< math display="true" >}}\frac{\lambda\eta_1}{2(\lambda+\eta_1)}{{< /math >}}

衰减，前因子依赖初始片段的一阶矩；进而存在唯一具有有限一阶矩的不变概率测度。这里的 {{< math >}}Q_1{{< /math >}} 同时包含当前耗散与延迟强度，不能只检查切换链本身的谱。

可数环境下，定理4.4还要求(A3)的跳跃结构、耗散参数有界、修正耗散序列单调，以及某个有限保序截断矩阵不可约且具有正的修正谱衰减参数。满足这些条件时同样得到唯一不变测度和指数趋近平衡。**这不是对任意可数切换链的无条件遍历性定理。**

**方法与证明思路：** 先证明片段半群的 Feller 性，再将连续状态差的估计与环境链的耦合时间结合。无限环境中，作者在共同 Poisson 随机测度上构造有限状态的路径保序下界，将指数泛函估计转回有限矩阵问题，而非直接把有限维 Perron–Frobenius 定理用于无限矩阵。

**与研究主线的关联：** 这是将非马尔可夫动力学转成路径空间 Markov 过程的具体例子。环境耦合成功后，还须等待整个延迟窗口完成同步，才能把“当前环境相同”转成“两段环境历史相同”。

**值得进一步研究的问题：** 本期提出：能否用其他可验证的比较或 Lyapunov 条件，减弱可数环境中的保序与单调性假设？需要保留对耦合时间和延迟扰动的共同控制，单独证明环境链常返并不充分。

---

### Strong well-posedness for cyclic catalytic reaction–diffusion SPDEs with mutation and immigration

{{< paper-meta
  authors="Jie Xiong、Wen Xu"
  source="arXiv 预印本"
  date="2026-10-30 · v1"
  arxiv="2610.41400"
  fulltext="https://arxiv.org/html/2610.41400v1"
  fulltextLabel="全文 v1"
  directions="分支过程"
>}}

**研究问题与背景：** 在循环催化分支模型中，第 {{< math >}}i+1{{< /math >}} 类种群的密度控制第 {{< math >}}i{{< /math >}} 类的分支波动。加入突变和移民后，零密度不再必然是吸收状态；平方根噪声在边界处的奇异性，使路径唯一性不能直接沿用边界吸收的论证。

**核心模型与数学设定：** 在一维区间 {{< math >}}I=(0,1){{< /math >}} 上使用 Neumann 边界条件，种群数 {{< math >}}K\geq2{{< /math >}}，并作循环约定 {{< math >}}u_{K+1}=u_1{{< /math >}}。密度方程为

{{< math display="true" >}}\begin{gathered}
\mathrm du_i=\left[\tfrac12\Delta_Nu_i+\sum_jq_{ij}u_j+\theta_i\right]\mathrm dt\\
+\sqrt{u_iu_{i+1}}\sum_{m\geq1}\sigma_{im}(x)\,\mathrm d\beta_{im}(t).
\end{gathered}{{< /math >}}

反应矩阵的非对角元非负，对角元允许增长或死亡，并不要求行和为零；移民项非负。假设2.1要求这些系数有界、每类空间噪声满足 {{< math >}}\sum_m\|\sigma_{im}\|_\infty^2<\infty{{< /math >}}，初值确定、非负并属于 {{< math >}}H^1(I)^K{{< /math >}}。令 {{< math >}}\lambda_i(x)=\sum_m\sigma_{im}(x)^2{{< /math >}}，假设2.2的关键严格间隙是

{{< math display="true" >}}q_{i,i+1}(x)-\tfrac14\lambda_i(x)\geq\delta_*>0.{{< /math >}}

这是循环流入漂移压过噪声协方差的条件；本文处理空间有色噪声，不把结论延伸到空间白噪声。

**主要定理与理论结果：** 定理2.6用凹幂熵建立边界占用估计，例如存在 {{< math >}}p\in(0,1/2){{< /math >}}，使

{{< math display="true" >}}\begin{gathered}\mathbb E\int_0^T\!\int_I u_{i+1}\mathbf1_{\{u_i\leq r\}}\,\mathrm dx\,\mathrm dt\\
\leq C_T r^{1-p},\qquad0<r\leq1.\end{gathered}{{< /math >}}

定理2.7对同一噪声驱动的两组非负弱变分解，证明平方根距离

{{< math display="true" >}}\mathcal H(u,v)=\sum_i\int_I(\sqrt{u_i}-\sqrt{v_i})^2\,\mathrm dx{{< /math >}}

的期望满足 Gronwall 型稳定性界，因而相同初值下路径唯一。这里的界允许指数增长，**并非证明解之间收缩或长期趋于平衡**。定理2.8进一步在指定 Wiener 空间上得到唯一非负的概率强解，具有 {{< math >}}C([0,T];C(\bar I)^K){{< /math >}} 版本，并有相应能量矩估计，对任意有限 {{< math >}}T{{< /math >}} 成立。

**方法与证明思路：** 构造保正的边界正则化与有限噪声模态近似，先控制能量和接近零面的占用，再对同步解使用双分量变分 Itô 公式。热算子的耗散与完整共变差共同进入 Hellinger 稳定性估计。最后联合保留状态和全部驱动噪声的紧性极限，通过鞅、括号与交叉变差识别，以及 Gyöngy–Krylov 判据，在原噪声空间完成强构造。

**与研究主线的关联：** 论文直接研究空间催化分支密度的适定性，说明突变、移民与分支噪声在零密度边界的竞争如何决定强解构造；这里的密度模型不能直接等同于一般测度值超过程的白噪声表示。

**值得进一步研究的问题：** 本期提出：严格漂移—协方差间隙趋于零时，哪些边界占用控制还能保留？本文的正间隙条件只是充分条件，不能据此断言临界等号或间隙为负时一定不唯一。

## 本期观察

三篇分别处理三个层面：同一噪声能否决定解、两组同步解能否保持一致，以及系统能否逐渐忘记初始历史。强构造、路径唯一和不变测度需要各自的论证；Sobolev 矩界、Hellinger 稳定性或环境链常返，都不能单独替代其他结论。本期没有直接研究自相互作用随机游走的新入选论文。

## 阅读建议

- **随机流：** 先读第一篇定理1.2与1.4，对照小二次型界和临界无散反例，注意唯一性解类。
- **记忆与平衡：** 读第二篇命题2.5、定理3.5与4.4，理解为什么状态和环境都要保留完整延迟片段。
- **催化分支：** 读第三篇假设2.2及定理2.6—2.8，沿“边界占用—同步稳定性—指定噪声强构造”的顺序梳理证明。
