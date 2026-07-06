(function(){
  const DATA = window.EXPANDED_DATA || [];
  const findTopic = (sid, tid) => {
    const s = DATA.find(x => x.id === sid);
    return s && s.topics && s.topics.find(t => t.id === tid);
  };
  const F = (n, tex, why='') => `<span class="eq"><span class="mini">${n}</span><span class="math-tex">\\[${tex}\\]</span></span>${why ? `<span class="why">${why}</span>` : ''}`;
  const S = (title, formulas, notes='', exam='') => ({ title, formulas, notes: Array.isArray(notes)?notes:(notes?[notes]:[]), exam });
  const set = (sid, tid, patch) => { const t = findTopic(sid, tid); if (t) Object.assign(t, patch); };

  set('quantum','fermi', {
    label: 'DOS、零温 Fermi 气与 Sommerfeld 展开：讲义 pp.72–96 完整版',
    pages: '《高统讲义-合并版》pp.72–96：k 空间态计数、DOS、粒子数方程、状态方程、零温费米气、Sommerfeld 展开与低温热容。',
    summary: '这一版按讲义 pp.72–96 把 DOS、零温费米气、Sommerfeld 展开的中间换元、积分、边界项和低温近似全部补出来，不再把三十页讲义压成四张公式卡。人类终于停止把“略”当作数学运算符。',
    core: String.raw`g(\epsilon)=\frac{g_sV}{4\pi^2}\left(\frac{2m}{\hbar^2}\right)^{3/2}\sqrt{\epsilon},\quad U_0=\frac35N\epsilon_F,\quad C_V=\frac{\pi^2}{2}Nk_B\frac{T}{T_F}`,
    steps: [
      S('p.72｜从巨正则平均占据数进入连续能谱', [
        F('1.1', String.raw`\bar n_\alpha=\frac{1}{e^{\beta(\epsilon_\alpha-\mu)}+1}`, '费米子的平均占据数。'),
        F('1.2', String.raw`N=\sum_\alpha \bar n_\alpha`, '总粒子数是所有单粒子态占据数之和。'),
        F('1.3', String.raw`U=\sum_\alpha \epsilon_\alpha\bar n_\alpha`, '内能是单粒子能量乘以平均占据数再求和。'),
        F('1.4', String.raw`\sum_\alpha \longrightarrow \int_0^\infty g(\epsilon)\,d\epsilon`, '热力学极限下能级很密，用态密度把求和改为积分。')
      ], ['这一页对应讲义中从离散能级分布进入态密度方法的过渡。', '后面所有费米气公式，本质上都是把不同的函数乘上 DOS 积分。']),
      S('p.73｜周期边界条件给出 k 空间格点', [
        F('2.1', String.raw`\psi(x+L)=\psi(x)`, '取周期边界条件。'),
        F('2.2', String.raw`e^{ik(x+L)}=e^{ikx}\quad\Rightarrow\quad e^{ikL}=1`, '平面波必须首尾相接。'),
        F('2.3', String.raw`kL=2\pi n,\quad n\in\mathbb Z`, '指数为 1 的条件。'),
        F('2.4', String.raw`k_x=\frac{2\pi n_x}{L},\quad k_y=\frac{2\pi n_y}{L},\quad k_z=\frac{2\pi n_z}{L}`, '三维立方盒中的 k 分量。'),
        F('2.5', String.raw`\Delta k_x\Delta k_y\Delta k_z=\left(\frac{2\pi}{L}\right)^3=\frac{(2\pi)^3}{V}`, '每个 k 态在 k 空间占据的体积。')
      ], '这一步是 DOS 的根。少了它，后面的态密度就像凭空从黑板缝里长出来。'),
      S('p.73–74｜k 空间求和变积分', [
        F('3.1', String.raw`\sum_{\mathbf k}F(\mathbf k)\approx \frac{V}{(2\pi)^3}\int d^3k\,F(\mathbf k)`, '每个 k 态体积为 (2π)^3/V，所以求和变积分要乘 V/(2π)^3。'),
        F('3.2', String.raw`\sum_{\alpha}=\sum_{\mathbf k,\sigma}=g_s\sum_{\mathbf k}`, '自旋简并度记为 g_s。电子通常 g_s=2。'),
        F('3.3', String.raw`\sum_{\alpha}F(\epsilon_{\mathbf k})\approx g_s\frac{V}{(2\pi)^3}\int d^3k\,F(\epsilon_{\mathbf k})`, '把自旋也包括进去。'),
        F('3.4', String.raw`d^3k=4\pi k^2dk`, '各向同性自由粒子，把三维积分化成球壳积分。')
      ], '讲义里这一步会反复用，DOS、N、U 都从这里起跑。'),
      S('p.74｜三维自由粒子的 DOS 逐行推导', [
        F('4.1', String.raw`d\mathcal N=g_s\frac{V}{(2\pi)^3}4\pi k^2dk`, 'k 到 k+dk 球壳中的态数。'),
        F('4.2', String.raw`\epsilon=\frac{\hbar^2k^2}{2m}`, '非相对论自由粒子色散。'),
        F('4.3', String.raw`k=\frac{\sqrt{2m\epsilon}}{\hbar}`, '把 k 写成 ε。'),
        F('4.4', String.raw`d\epsilon=\frac{\hbar^2k}{m}dk\quad\Rightarrow\quad dk=\frac{m}{\hbar^2k}d\epsilon`, '换元所需的微分关系。'),
        F('4.5', String.raw`g(\epsilon)=\frac{d\mathcal N}{d\epsilon}=g_s\frac{V}{(2\pi)^3}4\pi k^2\frac{m}{\hbar^2k}`, '态密度定义。'),
        F('4.6', String.raw`g(\epsilon)=\frac{g_sV}{4\pi^2}\left(\frac{2m}{\hbar^2}\right)^{3/2}\sqrt{\epsilon}`, '代入 k=√(2mε)/ℏ 后得到三维 DOS。')
      ], '你截图里这个专题如果只放结果，那就是把最该考的部分删了，真是效率主义对教育的又一次谋杀。'),
      S('p.74–75｜一维、二维、三维 DOS 的统一记忆', [
        F('5.1', String.raw`d\mathcal N_d=g_s\frac{V_d}{(2\pi)^d}S_{d-1}k^{d-1}dk`, 'd 维 k 空间球壳态数。'),
        F('5.2', String.raw`g_d(\epsilon)\propto k^{d-1}\frac{dk}{d\epsilon}`, 'DOS 的本质是球壳面积乘换元 Jacobian。'),
        F('5.3', String.raw`\epsilon\propto k^2\quad\Rightarrow\quad k\propto \epsilon^{1/2},\quad \frac{dk}{d\epsilon}\propto \epsilon^{-1/2}`, '自由粒子二次色散。'),
        F('5.4', String.raw`g_d(\epsilon)\propto \epsilon^{d/2-1}`, '维度决定 DOS 幂律。'),
        F('5.5', String.raw`g_{1D}\propto \epsilon^{-1/2},\quad g_{2D}\propto \epsilon^0,\quad g_{3D}\propto \epsilon^{1/2}`, '这就是不同维度 DOS 形状的来源。')
      ], '讲义这里常用来解释为什么二维 DOS 是常数。'),
      S('p.75–77｜粒子数方程写成 Fermi 积分', [
        F('6.1', String.raw`N=\int_0^\infty g(\epsilon)\frac{d\epsilon}{e^{\beta(\epsilon-\mu)}+1}`, '把平均占据数代入粒子数求和。'),
        F('6.2', String.raw`\frac{N}{V}=\frac{g_s}{4\pi^2}\left(\frac{2m}{\hbar^2}\right)^{3/2}\int_0^\infty\frac{\sqrt{\epsilon}\,d\epsilon}{e^{\beta(\epsilon-\mu)}+1}`, '代入三维 DOS。'),
        F('6.3', String.raw`x=\beta\epsilon,\quad z=e^{\beta\mu}`, '引入无量纲变量和逸度。'),
        F('6.4', String.raw`\frac{1}{e^{\beta(\epsilon-\mu)}+1}=\frac{1}{z^{-1}e^x+1}`, '把分布函数写成 z 的形式。'),
        F('6.5', String.raw`d\epsilon=k_BT\,dx,\quad \sqrt{\epsilon}=(k_BT)^{1/2}x^{1/2}`, '换元的每一项都要变。'),
        F('6.6', String.raw`\frac{N}{V}=\frac{g_s}{\lambda_T^3}f_{3/2}(z)`, '得到标准粒子数方程。')
      ], '这里的 f_{3/2}(z) 是 Fermi 积分，不是随手取的函数名。'),
      S('p.76–77｜热德布罗意波长如何出现', [
        F('7.1', String.raw`\lambda_T=\frac{h}{\sqrt{2\pi mk_BT}}=\sqrt{\frac{2\pi\hbar^2}{mk_BT}}`, '热德布罗意波长定义。'),
        F('7.2', String.raw`\lambda_T^{-3}=\left(\frac{mk_BT}{2\pi\hbar^2}\right)^{3/2}`, '把 λ_T 的三次方倒数写出。'),
        F('7.3', String.raw`f_\nu(z)=\frac{1}{\Gamma(\nu)}\int_0^\infty\frac{x^{\nu-1}}{z^{-1}e^x+1}dx`, 'Fermi 积分定义。'),
        F('7.4', String.raw`\frac{N}{V}=\frac{g_s}{\lambda_T^3}f_{3/2}(z)`, '粒子数方程的紧凑写法。'),
        F('7.5', String.raw`n\lambda_T^3=g_s f_{3/2}(z)`, '简并参数与逸度之间的关系。')
      ], 'nλ_T³ 小就是经典，大就是量子简并。别再把 λ_T 当普通德布罗意波长，它是温度给出的热平均尺度。'),
      S('p.77–79｜巨正则状态方程从 lnΞ 推出', [
        F('8.1', String.raw`\ln\Xi_F=\sum_\alpha\ln\left(1+ze^{-\beta\epsilon_\alpha}\right)`, '费米气巨配分函数。'),
        F('8.2', String.raw`\ln\Xi_F=\int_0^\infty g(\epsilon)\ln\left(1+ze^{-\beta\epsilon}\right)d\epsilon`, '用 DOS 把求和换成积分。'),
        F('8.3', String.raw`\Omega=-k_BT\ln\Xi,\quad \Omega=-PV`, '巨势与压强关系。'),
        F('8.4', String.raw`\frac{PV}{k_BT}=\ln\Xi_F`, '得到状态方程生成式。'),
        F('8.5', String.raw`\frac{P}{k_BT}=\frac{g_s}{\lambda_T^3}f_{5/2}(z)`, '分部积分后得到压强的 Fermi 积分表达式。')
      ], '讲义这里的重点是：N 用 f_{3/2}，P 用 f_{5/2}。'),
      S('p.79–80｜为什么非相对论自由气体有 PV=2U/3', [
        F('9.1', String.raw`U=\int_0^\infty \epsilon\,g(\epsilon)f(\epsilon)d\epsilon`, '内能表达式。'),
        F('9.2', String.raw`g(\epsilon)=C\sqrt{\epsilon}`, '三维非相对论 DOS。'),
        F('9.3', String.raw`U=C\int_0^\infty\epsilon^{3/2}f(\epsilon)d\epsilon`, '把 DOS 代入。'),
        F('9.4', String.raw`\frac{PV}{k_BT}=\int_0^\infty C\sqrt{\epsilon}\ln(1+ze^{-\beta\epsilon})d\epsilon`, '压强来自 lnΞ。'),
        F('9.5', String.raw`u=\ln(1+ze^{-\beta\epsilon}),\quad dv=C\sqrt{\epsilon}d\epsilon`, '对压强积分分部积分。'),
        F('9.6', String.raw`du=-\beta f(\epsilon)d\epsilon,\quad v=\frac{2C}{3}\epsilon^{3/2}`, '边界项在 0 和 ∞ 都为 0。'),
        F('9.7', String.raw`PV=\frac{2}{3}U`, '非相对论三维自由气体的量子状态方程。')
      ], '这条关系不只经典气体成立，对非相对论自由量子气体也成立。'),
      S('p.80–83｜T=0 时分布函数变成阶跃函数', [
        F('10.1', String.raw`f(\epsilon)=\frac{1}{e^{\beta(\epsilon-\mu)}+1}`, '从 Fermi 分布出发。'),
        F('10.2', String.raw`T\to0,\quad \beta\to\infty`, '零温极限。'),
        F('10.3', String.raw`\epsilon<\mu:\ e^{\beta(\epsilon-\mu)}\to0\Rightarrow f(\epsilon)\to1`, '费米面以下全部占据。'),
        F('10.4', String.raw`\epsilon>\mu:\ e^{\beta(\epsilon-\mu)}\to\infty\Rightarrow f(\epsilon)\to0`, '费米面以上全部空着。'),
        F('10.5', String.raw`f(\epsilon)=\Theta(\epsilon_F-\epsilon),\quad \mu(T=0)=\epsilon_F`, '阶跃函数形式。')
      ], '这就是费米海。别把它想成热分布，它是 Pauli 原理堆出来的海。'),
      S('p.81–83｜k_F、ε_F 与粒子数密度', [
        F('11.1', String.raw`N=g_s\frac{V}{(2\pi)^3}\frac{4\pi}{3}k_F^3`, '费米球内所有 k 态填满。'),
        F('11.2', String.raw`n=\frac{N}{V}=\frac{g_s}{6\pi^2}k_F^3`, '粒子数密度。'),
        F('11.3', String.raw`k_F=\left(\frac{6\pi^2n}{g_s}\right)^{1/3}`, '费米波矢。'),
        F('11.4', String.raw`g_s=2\Rightarrow k_F=(3\pi^2n)^{1/3}`, '电子气常用形式。'),
        F('11.5', String.raw`\epsilon_F=\frac{\hbar^2k_F^2}{2m}=\frac{\hbar^2}{2m}(3\pi^2n)^{2/3}`, '费米能。'),
        F('11.6', String.raw`v_F=\frac{\hbar k_F}{m}`, '费米速度。')
      ], '这部分是计算题最爱让你代数值的地方，铜、银电子气都这么算。'),
      S('p.83–84｜零温内能完整积分', [
        F('12.1', String.raw`U_0=\int_0^{\epsilon_F}\epsilon\,g(\epsilon)d\epsilon`, '零温只积到 ε_F。'),
        F('12.2', String.raw`g(\epsilon)=C\sqrt{\epsilon}`, '把三维 DOS 简写为 C√ε。'),
        F('12.3', String.raw`U_0=C\int_0^{\epsilon_F}\epsilon^{3/2}d\epsilon`, '能量多乘一个 ε。'),
        F('12.4', String.raw`U_0=C\frac{2}{5}\epsilon_F^{5/2}`, '积分结果。'),
        F('12.5', String.raw`N=C\int_0^{\epsilon_F}\epsilon^{1/2}d\epsilon=C\frac{2}{3}\epsilon_F^{3/2}`, '粒子数积分。'),
        F('12.6', String.raw`\frac{U_0}{N}=\frac{(2/5)\epsilon_F^{5/2}}{(2/3)\epsilon_F^{3/2}}=\frac{3}{5}\epsilon_F`, '两式相除。'),
        F('12.7', String.raw`U_0=\frac{3}{5}N\epsilon_F`, '零温费米气内能。')
      ], '这一步不要直接背 3/5，积分写出来才是完整推导。'),
      S('p.84｜零温简并压', [
        F('13.1', String.raw`dU=T\,dS-P\,dV+\mu\,dN`, '热力学基本关系。'),
        F('13.2', String.raw`T=0,\quad dN=0\Rightarrow P=-\left(\frac{\partial U}{\partial V}\right)_N`, '零温定粒子数下的压强。'),
        F('13.3', String.raw`\epsilon_F=\frac{\hbar^2}{2m}\left(\frac{6\pi^2N}{g_sV}\right)^{2/3}`, 'ε_F 依赖体积。'),
        F('13.4', String.raw`U_0=\frac{3}{5}N\epsilon_F\propto V^{-2/3}`, 'N 固定时 U 随 V 变。'),
        F('13.5', String.raw`P=-\frac{\partial}{\partial V}\left(\frac{3}{5}N\epsilon_F\right)=\frac{2}{5}\frac{N}{V}\epsilon_F`, '对 V 求导。'),
        F('13.6', String.raw`P=\frac{2}{5}n\epsilon_F,\quad PV=\frac{2}{5}N\epsilon_F=\frac{2}{3}U_0`, '零温状态方程。')
      ], '简并压不是来自热运动，而是来自 Pauli 原理导致的动量填充。'),
      S('p.85｜Sommerfeld 展开的目标', [
        F('14.1', String.raw`I=\int_0^\infty \phi(\epsilon)f(\epsilon)d\epsilon`, '低温费米气中的典型积分。'),
        F('14.2', String.raw`f(\epsilon)=\frac{1}{e^{\beta(\epsilon-\mu)}+1}`, '费米分布。'),
        F('14.3', String.raw`T\ll T_F`, '低温条件。'),
        F('14.4', String.raw`I=\int_0^\mu\phi(\epsilon)d\epsilon+\text{费米面附近修正}`, '低温修正只来自 ε≈μ 附近。')
      ], 'Sommerfeld 展开的物理意义：只有费米面附近宽度约 kBT 的电子能被热激发。'),
      S('p.86–89｜Sommerfeld 展开的换元和拆分', [
        F('15.1', String.raw`x=\beta(\epsilon-\mu),\quad \epsilon=\mu+k_BTx,\quad d\epsilon=k_BT\,dx`, '把费米面附近放大。'),
        F('15.2', String.raw`I=\int_{-\beta\mu}^{\infty}\frac{\phi(\mu+k_BTx)}{e^x+1}k_BT\,dx`, '换元后的积分。'),
        F('15.3', String.raw`I=\int_0^\mu\phi(\epsilon)d\epsilon+\Delta I`, '先取零温阶跃部分，再算修正。'),
        F('15.4', String.raw`\Delta I=(k_BT)\int_0^\infty\frac{\phi(\mu+k_BTx)-\phi(\mu-k_BTx)}{e^x+1}dx`, '正负两侧的修正合并。'),
        F('15.5', String.raw`\phi(\mu+k_BTx)-\phi(\mu-k_BTx)=2k_BTx\,\phi'(\mu)+\frac{(k_BTx)^3}{3}\phi'''(\mu)+\cdots`, 'Taylor 展开后偶次项抵消。')
      ], '这就是讲义里最容易看花的部分，实际逻辑只是“费米面两侧作差”。'),
      S('p.89–91｜Sommerfeld 展开的标准结果', [
        F('16.1', String.raw`\int_0^\infty\frac{x}{e^x+1}dx=\frac{\pi^2}{12}`, '第一个常用积分。'),
        F('16.2', String.raw`\int_0^\infty\frac{x^3}{e^x+1}dx=\frac{7\pi^4}{120}`, '第二个常用积分。'),
        F('16.3', String.raw`I=\int_0^\mu\phi(\epsilon)d\epsilon+\frac{\pi^2}{6}(k_BT)^2\phi'(\mu)+\frac{7\pi^4}{360}(k_BT)^4\phi'''(\mu)+\cdots`, 'Sommerfeld 展开。'),
        F('16.4', String.raw`T\ll T_F\Rightarrow I\simeq\int_0^\mu\phi(\epsilon)d\epsilon+\frac{\pi^2}{6}(k_BT)^2\phi'(\mu)`, '通常只保留 T² 项。')
      ], '考试如果说“会用 Sommerfeld 展开”，通常就是把这条公式用到 N 和 U 上。'),
      S('p.91–93｜低温化学势 μ(T)', [
        F('17.1', String.raw`N=\int_0^\infty g(\epsilon)f(\epsilon)d\epsilon`, '粒子数固定。'),
        F('17.2', String.raw`\phi(\epsilon)=g(\epsilon)=C\epsilon^{1/2}`, '对 N 使用 Sommerfeld 展开。'),
        F('17.3', String.raw`N=\int_0^\mu C\epsilon^{1/2}d\epsilon+\frac{\pi^2}{6}(k_BT)^2\frac{C}{2}\mu^{-1/2}`, '保留 T² 项。'),
        F('17.4', String.raw`N=\frac{2C}{3}\mu^{3/2}+\frac{\pi^2C}{12}(k_BT)^2\mu^{-1/2}`, '显式积分。'),
        F('17.5', String.raw`N=\frac{2C}{3}\epsilon_F^{3/2}`, '零温时的粒子数。'),
        F('17.6', String.raw`\mu=\epsilon_F+\delta\mu,\quad |\delta\mu|\ll \epsilon_F`, '低温微扰求解。'),
        F('17.7', String.raw`\mu(T)=\epsilon_F\left[1-\frac{\pi^2}{12}\left(\frac{k_BT}{\epsilon_F}\right)^2+\cdots\right]`, '低温化学势略低于费米能。')
      ], '注意 μ 会随温度变。把 μ 直接当 ε_F 会漏掉同阶修正，人类又在近似里偷偷欠债。'),
      S('p.93–95｜低温内能和热容', [
        F('18.1', String.raw`U=\int_0^\infty \epsilon g(\epsilon)f(\epsilon)d\epsilon`, '内能积分。'),
        F('18.2', String.raw`\phi(\epsilon)=\epsilon g(\epsilon)=C\epsilon^{3/2}`, '对 U 使用 Sommerfeld 展开。'),
        F('18.3', String.raw`U=\int_0^\mu C\epsilon^{3/2}d\epsilon+\frac{\pi^2}{6}(k_BT)^2\frac{3C}{2}\mu^{1/2}`, '保留 T² 项。'),
        F('18.4', String.raw`U=\frac{2C}{5}\mu^{5/2}+\frac{\pi^2C}{4}(k_BT)^2\mu^{1/2}`, '显式积分。'),
        F('18.5', String.raw`U(T)=\frac35N\epsilon_F+\frac{\pi^2}{4}N\frac{(k_BT)^2}{\epsilon_F}+\cdots`, '把 μ(T) 代入并保留 T²。'),
        F('18.6', String.raw`C_V=\left(\frac{\partial U}{\partial T}\right)_{V,N}=\frac{\pi^2}{2}Nk_B\frac{k_BT}{\epsilon_F}`, '电子热容。'),
        F('18.7', String.raw`C_V=\frac{\pi^2}{2}Nk_B\frac{T}{T_F}`, '用 ε_F=k_BT_F 改写。')
      ], '费米气低温热容 ∝T，不是经典的 3NkB/2。原因：只有费米面附近少数电子能被激发。'),
      S('p.95–96｜考试写法总结', [
        F('19.1', String.raw`g(\epsilon)\propto\sqrt{\epsilon}`, '三维自由电子 DOS。'),
        F('19.2', String.raw`N=\int_0^{\epsilon_F}g(\epsilon)d\epsilon,\quad U_0=\int_0^{\epsilon_F}\epsilon g(\epsilon)d\epsilon`, '零温两个核心积分。'),
        F('19.3', String.raw`\frac{U_0}{N}=\frac35\epsilon_F,\quad P_0=\frac25n\epsilon_F`, '零温结果。'),
        F('19.4', String.raw`\int_0^\infty\phi f\,d\epsilon=\int_0^\mu\phi\,d\epsilon+\frac{\pi^2}{6}(k_BT)^2\phi'(\mu)+\cdots`, 'Sommerfeld 展开。'),
        F('19.5', String.raw`C_V=\gamma T,\quad \gamma=\frac{\pi^2}{2}\frac{Nk_B}{T_F}`, '低温线性热容。')
      ], '这五行是考场最后压缩版，但网页正文上面已经把每一行怎么来都展开了。')
    ]
  });

  set('quantum','phonon', {
    label: '一维原子链声子量子化：讲义 pp.97–103 完整版',
    pages: '《高统讲义-合并版》pp.97–103：一维原子链、谐近似、运动方程、Fourier 对角化、正常模、产生/湮灭算符、声子 Hamiltonian 与 Debye 热容入口。',
    summary: '这一版按讲义 pp.97–103 把一维原子链声子量子化从实空间 Hamiltonian 一步步推到声子 Hamiltonian，补上 Fourier 变换、势能对角化、正则量子化和 a/a† 代回的完整逻辑。之前那种只摆 H=Σℏω(a†a+1/2) 的做法，基本等于把楼梯拆了让人直接跳楼。',
    core: String.raw`H=\sum_q\hbar\omega_q\left(a_q^\dagger a_q+\frac12\right),\quad \omega_q=2\sqrt{\frac{K}{M}}\left|\sin\frac{qa}{2}\right|`,
    steps: [
      S('p.97｜定义一维单原子链和小位移', [
        F('1.1', String.raw`R_n^0=na`, '第 n 个原子的平衡位置。'),
        F('1.2', String.raw`R_n=R_n^0+u_n`, '实际位置等于平衡位置加位移。'),
        F('1.3', String.raw`|u_{n+1}-u_n|\ll a`, '小振动条件。'),
        F('1.4', String.raw`p_n=M\dot u_n`, 'u_n 的共轭动量。')
      ], '声子不是某个原子在动，而是整条链的集体正常模。'),
      S('p.97｜谐近似 Hamiltonian', [
        F('2.1', String.raw`T=\sum_n\frac{p_n^2}{2M}`, '所有原子的动能。'),
        F('2.2', String.raw`V=\frac{K}{2}\sum_n(u_{n+1}-u_n)^2`, '最近邻弹簧势能。'),
        F('2.3', String.raw`H=\sum_n\frac{p_n^2}{2M}+\frac{K}{2}\sum_n(u_{n+1}-u_n)^2`, '一维单原子链的谐近似 Hamiltonian。'),
        F('2.4', String.raw`u_n\to u_n+C\Rightarrow V\text{ 不变}`, '整体平移不改变相对距离，所以最低支是声学支。')
      ], '这里的 K 是有效力常数，不是波矢 k。人类用同一个字母干两份工作，真是符号界内卷。'),
      S('p.98｜由 Hamiltonian 得到运动方程', [
        F('3.1', String.raw`\dot u_n=\frac{\partial H}{\partial p_n}=\frac{p_n}{M}`, 'Hamilton 方程第一式。'),
        F('3.2', String.raw`\dot p_n=-\frac{\partial H}{\partial u_n}`, 'Hamilton 方程第二式。'),
        F('3.3', String.raw`\frac{\partial V}{\partial u_n}=K(u_n-u_{n-1})-K(u_{n+1}-u_n)`, 'u_n 同时出现在左右两根弹簧里。'),
        F('3.4', String.raw`M\ddot u_n=K(u_{n+1}+u_{n-1}-2u_n)`, '离散波动方程。')
      ], '这一页是从能量形式到色散关系的第一条路。'),
      S('p.98｜平面波试探解与色散关系', [
        F('4.1', String.raw`u_n(t)=u_q e^{i(qna-\omega t)}`, '设集体振动为平面波。'),
        F('4.2', String.raw`u_{n+1}=u_ne^{iqa},\quad u_{n-1}=u_ne^{-iqa}`, '相邻格点只差相位。'),
        F('4.3', String.raw`-M\omega^2u_n=K(e^{iqa}+e^{-iqa}-2)u_n`, '代入运动方程。'),
        F('4.4', String.raw`M\omega^2=K(2-e^{iqa}-e^{-iqa})`, '移项后得到正量。'),
        F('4.5', String.raw`2-e^{iqa}-e^{-iqa}=2-2\cos qa=4\sin^2\frac{qa}{2}`, '三角恒等式。'),
        F('4.6', String.raw`\omega_q=2\sqrt{\frac{K}{M}}\left|\sin\frac{qa}{2}\right|`, '一维单原子链声学色散。')
      ], '先用运动方程推一遍，后面 Fourier 对角化会得到完全相同结果。'),
      S('p.98–99｜长波极限与声速', [
        F('5.1', String.raw`qa\ll1`, '长波极限，波长远大于晶格常数。'),
        F('5.2', String.raw`\sin\frac{qa}{2}\simeq\frac{qa}{2}`, '小角近似。'),
        F('5.3', String.raw`\omega_q\simeq a\sqrt{\frac{K}{M}}|q|`, '色散变成线性。'),
        F('5.4', String.raw`\omega=v_s|q|,\quad v_s=a\sqrt{\frac{K}{M}}`, '定义声速。'),
        F('5.5', String.raw`q=0\Rightarrow \omega=0`, 'q=0 是整体平移模式，不需要弹性能。')
      ], '这就是为什么低能声子像声波。'),
      S('p.99｜Fourier 变换定义', [
        F('6.1', String.raw`u_n=\frac{1}{\sqrt N}\sum_q Q_qe^{iqna}`, '把局域位移展开为正常坐标。'),
        F('6.2', String.raw`p_n=\frac{1}{\sqrt N}\sum_q P_qe^{-iqna}`, '动量也展开。这里的正负号是一种约定。'),
        F('6.3', String.raw`Q_q=\frac{1}{\sqrt N}\sum_nu_ne^{-iqna}`, '反变换。'),
        F('6.4', String.raw`P_q=\frac{1}{\sqrt N}\sum_np_ne^{iqna}`, '动量反变换。'),
        F('6.5', String.raw`\sum_ne^{i(q-q')na}=N\delta_{q,q'}`, '周期边界条件给出的正交关系。')
      ], 'Fourier 变换的目的：把相邻格点耦合变成不同 q 模式的独立振子。'),
      S('p.99–100｜动能项对角化，不跳步', [
        F('7.1', String.raw`T=\sum_n\frac{p_n^2}{2M}`, '动能项。'),
        F('7.2', String.raw`p_n^2=\frac{1}{N}\sum_{q,q'}P_qP_{q'}e^{-i(q+q')na}`, '代入 p_n 的展开。'),
        F('7.3', String.raw`T=\frac{1}{2MN}\sum_{n,q,q'}P_qP_{q'}e^{-i(q+q')na}`, '交换求和顺序。'),
        F('7.4', String.raw`\sum_ne^{-i(q+q')na}=N\delta_{q',-q}`, 'n 求和给出选择规则。'),
        F('7.5', String.raw`T=\sum_q\frac{P_qP_{-q}}{2M}`, '动能在 q 空间对角。')
      ], '这里 q 和 -q 成对出现，是因为 u_n 是实数。'),
      S('p.100｜势能项对角化，一步都不省', [
        F('8.1', String.raw`u_{n+1}-u_n=\frac{1}{\sqrt N}\sum_qQ_qe^{iqna}(e^{iqa}-1)`, '先写相邻位移差。'),
        F('8.2', String.raw`(u_{n+1}-u_n)^2=\frac{1}{N}\sum_{q,q'}Q_qQ_{q'}e^{i(q+q')na}(e^{iqa}-1)(e^{iq'a}-1)`, '平方后出现双重求和。'),
        F('8.3', String.raw`V=\frac{K}{2N}\sum_{n,q,q'}Q_qQ_{q'}e^{i(q+q')na}(e^{iqa}-1)(e^{iq'a}-1)`, '代入势能。'),
        F('8.4', String.raw`\sum_ne^{i(q+q')na}=N\delta_{q',-q}`, 'n 求和选出 q′=-q。'),
        F('8.5', String.raw`(e^{iqa}-1)(e^{-iqa}-1)=2-e^{iqa}-e^{-iqa}`, '代入 q′=-q。'),
        F('8.6', String.raw`2-e^{iqa}-e^{-iqa}=4\sin^2\frac{qa}{2}`, '再用三角恒等式。'),
        F('8.7', String.raw`V=2K\sum_q\sin^2\frac{qa}{2}Q_qQ_{-q}`, '势能对角化完成。')
      ], '这是讲义 pp.99–100 的核心代数。省了这里，声子量子化就只剩摆拍。'),
      S('p.100｜正常模 Hamiltonian', [
        F('9.1', String.raw`H=\sum_q\left[\frac{P_qP_{-q}}{2M}+2K\sin^2\frac{qa}{2}Q_qQ_{-q}\right]`, '合并动能与势能。'),
        F('9.2', String.raw`\frac{1}{2}M\omega_q^2=2K\sin^2\frac{qa}{2}`, '与谐振子标准势能比较。'),
        F('9.3', String.raw`\omega_q^2=\frac{4K}{M}\sin^2\frac{qa}{2}`, '得到频率平方。'),
        F('9.4', String.raw`H=\sum_q\left[\frac{P_qP_{-q}}{2M}+\frac{1}{2}M\omega_q^2Q_qQ_{-q}\right]`, '每个 q 模式都是一个谐振子。')
      ], '到这里还只是经典正常模，还没有量子化。'),
      S('p.100–101｜正则量子化与对易关系', [
        F('10.1', String.raw`[\hat u_n,\hat p_m]=i\hbar\delta_{nm}`, '实空间正则对易关系。'),
        F('10.2', String.raw`\hat Q_q=\frac{1}{\sqrt N}\sum_n\hat u_ne^{-iqna}`, '正常坐标算符。'),
        F('10.3', String.raw`\hat P_q=\frac{1}{\sqrt N}\sum_n\hat p_ne^{iqna}`, '正常动量算符。'),
        F('10.4', String.raw`[\hat Q_q,\hat P_{q'}]=i\hbar\delta_{q,q'}`, 'Fourier 变换保持正则结构。'),
        F('10.5', String.raw`\hat Q_q^\dagger=\hat Q_{-q},\quad \hat P_q^\dagger=\hat P_{-q}`, '因为原始位移 u_n 和动量 p_n 是厄米算符。')
      ], '量子化不是把 H 上面加个帽子就完事，正则对易关系才是关键。'),
      S('p.101｜为什么要定义 a 与 a†', [
        F('11.1', String.raw`H_{\mathrm{osc}}=\frac{P^2}{2M}+\frac{1}{2}M\omega^2Q^2`, '每个正常模都是谐振子。'),
        F('11.2', String.raw`a=\sqrt{\frac{M\omega}{2\hbar}}Q+\frac{i}{\sqrt{2M\hbar\omega}}P`, '湮灭算符定义。'),
        F('11.3', String.raw`a^\dagger=\sqrt{\frac{M\omega}{2\hbar}}Q-\frac{i}{\sqrt{2M\hbar\omega}}P`, '产生算符定义。'),
        F('11.4', String.raw`[a,a^\dagger]=1`, '由 [Q,P]=iℏ 直接得到。'),
        F('11.5', String.raw`Q=\sqrt{\frac{\hbar}{2M\omega}}(a+a^\dagger)`, '反解坐标。'),
        F('11.6', String.raw`P=-i\sqrt{\frac{M\hbar\omega}{2}}(a-a^\dagger)`, '反解动量。')
      ], '这样定义的目的不是玄学，是为了把 H 化成数算符。'),
      S('p.101–102｜把 a、a† 代回谐振子 Hamiltonian', [
        F('12.1', String.raw`\frac{P^2}{2M}=-\frac{\hbar\omega}{4}(a-a^\dagger)^2`, '由 P 的反解代回。'),
        F('12.2', String.raw`\frac{1}{2}M\omega^2Q^2=\frac{\hbar\omega}{4}(a+a^\dagger)^2`, '由 Q 的反解代回。'),
        F('12.3', String.raw`H_{\mathrm{osc}}=\frac{\hbar\omega}{4}\left[(a+a^\dagger)^2-(a-a^\dagger)^2\right]`, '动能和势能相加。'),
        F('12.4', String.raw`(a+a^\dagger)^2-(a-a^\dagger)^2=2aa^\dagger+2a^\dagger a`, '展开并抵消 a² 与 a†²。'),
        F('12.5', String.raw`aa^\dagger=a^\dagger a+1`, '使用对易关系。'),
        F('12.6', String.raw`H_{\mathrm{osc}}=\hbar\omega\left(a^\dagger a+\frac12\right)`, '得到单个量子谐振子 Hamiltonian。')
      ], '这就是你要的“量子化过程”，不是只摆最后那一行糊弄过去。'),
      S('p.102｜推广到所有 q 模式', [
        F('13.1', String.raw`H=\sum_q H_q`, '正常模之间独立。'),
        F('13.2', String.raw`H_q=\hbar\omega_q\left(a_q^\dagger a_q+\frac12\right)`, '每个 q 模是一个量子谐振子。'),
        F('13.3', String.raw`\hat n_q=a_q^\dagger a_q`, '声子数算符。'),
        F('13.4', String.raw`H=\sum_q\hbar\omega_q\left(\hat n_q+\frac12\right)`, '声子 Hamiltonian。'),
        F('13.5', String.raw`E_{\{n_q\}}=\sum_q\hbar\omega_q\left(n_q+\frac12\right)`, '多声子态能量。')
      ], '声子就是晶格振动正常模的能量量子，不是一个真的“小球粒子”在原子之间乱跑。'),
      S('p.102｜实空间位移算符的声子展开', [
        F('14.1', String.raw`\hat u_n=\frac{1}{\sqrt N}\sum_q\sqrt{\frac{\hbar}{2M\omega_q}}\left(a_qe^{iqna}+a_q^\dagger e^{-iqna}\right)`, '把 Q_q 的量子化表达代回位移。'),
        F('14.2', String.raw`\hat p_n=\frac{-i}{\sqrt N}\sum_q\sqrt{\frac{M\hbar\omega_q}{2}}\left(a_qe^{iqna}-a_q^\dagger e^{-iqna}\right)`, '动量算符展开。'),
        F('14.3', String.raw`a_q^\dagger|n_q\rangle=\sqrt{n_q+1}|n_q+1\rangle`, '产生一个 q 模声子。'),
        F('14.4', String.raw`a_q|n_q\rangle=\sqrt{n_q}|n_q-1\rangle`, '湮灭一个 q 模声子。')
      ], '这一步把抽象的 a_q 和真实原子位移联系起来。'),
      S('p.102–103｜声子的 Bose 分布', [
        F('15.1', String.raw`Z_q=\sum_{n=0}^{\infty}e^{-\beta\hbar\omega_q(n+1/2)}`, '单个声子模的配分函数。'),
        F('15.2', String.raw`Z_q=\frac{e^{-\beta\hbar\omega_q/2}}{1-e^{-\beta\hbar\omega_q}}`, '几何级数求和。'),
        F('15.3', String.raw`\bar n_q=\frac{1}{e^{\beta\hbar\omega_q}-1}`, '声子是玻色型集体激发。'),
        F('15.4', String.raw`U=\sum_q\hbar\omega_q\left(\bar n_q+\frac12\right)`, '平均能量。'),
        F('15.5', String.raw`U_{\mathrm{th}}=\sum_q\frac{\hbar\omega_q}{e^{\beta\hbar\omega_q}-1}`, '热容计算通常只需热激发部分，零点能不贡献 C_V。')
      ], '声子数不守恒，所以化学势为 0。'),
      S('p.103｜Debye 模型入口：把求和变积分', [
        F('16.1', String.raw`\sum_q\longrightarrow \int_0^{\omega_D}g(\omega)d\omega`, '热力学极限下把声子模求和变成频率积分。'),
        F('16.2', String.raw`\omega=v_s q`, 'Debye 近似：低频声学支线性色散。'),
        F('16.3', String.raw`g(\omega)=\frac{3V}{2\pi^2v_s^3}\omega^2`, '三维三支声学声子的 Debye DOS，若只写单支则少一个 3。'),
        F('16.4', String.raw`3N=\int_0^{\omega_D}g(\omega)d\omega`, '用总振动模数确定截止频率。'),
        F('16.5', String.raw`U_{\mathrm{th}}=\int_0^{\omega_D}d\omega\,g(\omega)\frac{\hbar\omega}{e^{\beta\hbar\omega}-1}`, 'Debye 内能。')
      ], '讲义到这里已经把量子化和热容计算接上了。'),
      S('p.103｜Debye 热容的标准结果', [
        F('17.1', String.raw`x=\frac{\hbar\omega}{k_BT},\quad \Theta_D=\frac{\hbar\omega_D}{k_B}`, '无量纲化。'),
        F('17.2', String.raw`U_{\mathrm{th}}=9Nk_BT\left(\frac{T}{\Theta_D}\right)^3\int_0^{\Theta_D/T}\frac{x^3}{e^x-1}dx`, 'Debye 内能标准式。'),
        F('17.3', String.raw`C_V=\left(\frac{\partial U}{\partial T}\right)_V=9Nk_B\left(\frac{T}{\Theta_D}\right)^3\int_0^{\Theta_D/T}\frac{x^4e^x}{(e^x-1)^2}dx`, 'Debye 热容公式。'),
        F('17.4', String.raw`T\ll\Theta_D:\quad C_V\propto T^3`, '低温 Debye T³ 定律。'),
        F('17.5', String.raw`T\gg\Theta_D:\quad C_V\to3Nk_B`, '高温 Dulong-Petit 极限。')
      ], '这部分和前面的声子量子化是一条链：没有声子 Hamiltonian，就没有 Bose 占据数，也就没有 Debye 热容。'),
      S('考场压缩版｜一维原子链声子量子化必须写出的链条', [
        F('18.1', String.raw`H=\sum_n\frac{p_n^2}{2M}+\frac{K}{2}\sum_n(u_{n+1}-u_n)^2`, '实空间 Hamiltonian。'),
        F('18.2', String.raw`u_n=\frac{1}{\sqrt N}\sum_qQ_qe^{iqna},\quad p_n=\frac{1}{\sqrt N}\sum_qP_qe^{-iqna}`, 'Fourier 变换。'),
        F('18.3', String.raw`H=\sum_q\left[\frac{P_qP_{-q}}{2M}+\frac12M\omega_q^2Q_qQ_{-q}\right]`, '正常模对角化。'),
        F('18.4', String.raw`\omega_q=2\sqrt{\frac{K}{M}}\left|\sin\frac{qa}{2}\right|`, '色散关系。'),
        F('18.5', String.raw`a_q=\sqrt{\frac{M\omega_q}{2\hbar}}Q_q+\frac{i}{\sqrt{2M\hbar\omega_q}}P_q`, '定义湮灭算符。'),
        F('18.6', String.raw`H=\sum_q\hbar\omega_q\left(a_q^\dagger a_q+\frac12\right)`, '最终声子 Hamiltonian。')
      ], '这六行是考场骨架；网页前面已经把每一块骨头旁边的肌肉也补上了。')
    ]
  });
})();