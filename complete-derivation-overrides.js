(function(){
  const DATA = window.EXPANDED_DATA || [];
  const sec = id => DATA.find(s => s.id === id);
  const getTopic = (sid, tid) => { const s = sec(sid); return s && s.topics.find(t => t.id === tid); };
  const f = (n, tex, why) => `<span class="eq"><span class="mini">${n}</span><span class="math-tex">\\[${tex}\\]</span></span><span class="why">${why}</span>`;
  const S = (title, formulas, notes, exam) => ({ title, formulas, notes, exam });
  const setTopic = (sid, tid, patch) => { const t = getTopic(sid, tid); if (!t) return; Object.assign(t, patch); };
  const appendStep = (sid, tid, step) => { const t = getTopic(sid, tid); if (!t) return; const old = t.steps.findIndex(s => s.title === step.title); if (old >= 0) t.steps[old] = step; else t.steps.push(step); };

  setTopic('quantum','phonon',{
    label: '一维原子链声子量子化全过程',
    summary: '从实空间原子链 Hamiltonian 出发，逐步 Fourier 对角化，定义产生/湮灭算符，并把它们代回 Hamiltonian。这里不再只摆一个最终公式给人类膜拜。',
    core: String.raw`H\to\sum_q\left[\frac{P_qP_{-q}}{2M}+\frac12M\omega_q^2Q_qQ_{-q}\right]\to\sum_q\hbar\omega_q(a_q^\dagger a_q+1/2)`,
    steps: [
      S('01 实空间原子链 Hamiltonian', [
        f('1.1', String.raw`R_i^0=ia,\qquad R_i=R_i^0+u_i`, '第 i 个原子的平衡位置是 \(ia\)，实际位置多了小位移 \(u_i\)。'),
        f('1.2', String.raw`T=\sum_i\frac{p_i^2}{2M},\qquad p_i=M\dot u_i`, '动能来自每个原子的振动速度。'),
        f('1.3', String.raw`V=\frac{K}{2}\sum_i(u_{i+1}-u_i)^2`, '最近邻谐近似：势能只和相邻原子的相对位移有关。'),
        f('1.4', String.raw`H=\sum_i\frac{p_i^2}{2M}+\frac{K}{2}\sum_i(u_{i+1}-u_i)^2`, '这才是一维单原子链声子量子化的真正起点。'),
        f('1.5', String.raw`[\hat u_i,\hat p_j]=i\hbar\delta_{ij}`, '量子化时坐标和动量满足正则对易关系。')
      ], ['整体平移所有原子时 \(u_{i+1}-u_i=0\)，所以不会产生弹性能。', '谐近似来自势能在平衡位置附近 Taylor 展开到二阶；一阶项因平衡条件为零。'], '考试先写实空间 Hamiltonian，别直接从 \(\sum\hbar\omega\) 开始。'),
      S('02 Fourier 变换把实空间变量换成正常模', [
        f('2.1', String.raw`u_i=\frac1{\sqrt N}\sum_q Q_qe^{iqR_i^0}`, '位移展开成波矢 q 的集体振动模式。'),
        f('2.2', String.raw`p_i=\frac1{\sqrt N}\sum_q P_qe^{-iqR_i^0}`, '动量也展开成对应的正常模。'),
        f('2.3', String.raw`Q_q=\frac1{\sqrt N}\sum_i u_ie^{-iqR_i^0},\qquad P_q=\frac1{\sqrt N}\sum_i p_ie^{iqR_i^0}`, '这是反变换。'),
        f('2.4', String.raw`\sum_i e^{i(q-q′)R_i^0}=N\delta_{q,q′}`, '周期边界条件给出正交关系。'),
        f('2.5', String.raw`u_i^\dagger=u_i\Rightarrow Q_q^\dagger=Q_{-q},\qquad p_i^\dagger=p_i\Rightarrow P_q^\dagger=P_{-q}`, '实位移和实动量要求 q 与 -q 模互为共轭。'),
        f('2.6', String.raw`[Q_q,P_{q′}]=i\hbar\delta_{q,q′}`, '由 \([u_i,p_j]=i\hbar\delta_{ij}\) 推出正常模变量的对易关系。')
      ], ['\(Q_q\) 是第 q 个集体振动模式的坐标，不是新粒子的坐标。', 'q 的允许值由周期边界条件给出：\(q=2\pi n/(Na)\)。'], '写 Fourier 变换和正交关系。'),
      S('03 动能项如何对角化', [
        f('3.1', String.raw`T=\frac1{2M}\sum_i\left(\frac1{\sqrt N}\sum_qP_qe^{-iqR_i^0}\right)\left(\frac1{\sqrt N}\sum_{q′}P_{q′}e^{-iq′R_i^0}\right)`, '把动量 Fourier 展开代入动能。'),
        f('3.2', String.raw`T=\frac1{2MN}\sum_{q,q′}P_qP_{q′}\sum_i e^{-i(q+q′)R_i^0}`, '交换求和顺序。'),
        f('3.3', String.raw`\sum_i e^{-i(q+q′)R_i^0}=N\delta_{q′,-q}`, '正交性筛掉非对角项。'),
        f('3.4', String.raw`T=\frac1{2M}\sum_qP_qP_{-q}`, '动能变成各正常模之和。')
      ], ['这一步就是“对角化”的第一半。没有指数正交关系，就不会自动变简单。'], '会从双重求和化到 \(P_qP_{-q}\)。'),
      S('04 势能项如何给出声子色散', [
        f('4.1', String.raw`u_{i+1}-u_i=\frac1{\sqrt N}\sum_qQ_qe^{iqR_i^0}(e^{iqa}-1)`, '相邻位移差代入 Fourier 展开。'),
        f('4.2', String.raw`V=\frac{K}{2N}\sum_{i,q,q′}Q_qQ_{q′}e^{i(q+q′)R_i^0}(e^{iqa}-1)(e^{iq′a}-1)`, '把平方项完整展开。'),
        f('4.3', String.raw`\sum_i e^{i(q+q′)R_i^0}=N\delta_{q′,-q}`, '正交性只保留 q′=-q。'),
        f('4.4', String.raw`(e^{iqa}-1)(e^{-iqa}-1)=2-e^{iqa}-e^{-iqa}=4\sin^2\frac{qa}{2}`, '这一步给出正弦形式的色散。'),
        f('4.5', String.raw`V=\frac K2\sum_q4\sin^2\frac{qa}{2}\,Q_qQ_{-q}`, '势能也被对角化。'),
        f('4.6', String.raw`\omega_q^2=\frac{4K}{M}\sin^2\frac{qa}{2}`, '和谐振子势能 \(\frac12M\omega_q^2Q_qQ_{-q}\) 对比。'),
        f('4.7', String.raw`\omega_q=2\sqrt{\frac KM}\left|\sin\frac{qa}{2}\right|\simeq v_s|q|,\quad v_s=a\sqrt{K/M}`, '长波极限下得到线性色散。')
      ], ['声速 \(v_s\) 是长波极限的斜率。', '“色散关系”就是 \(\omega\) 如何依赖 \(q\)。'], '重点写出 \((e^{iqa}-1)(e^{-iqa}-1)=4\sin^2(qa/2)\)。'),
      S('05 经典正常模 Hamiltonian', [
        f('5.1', String.raw`H=\sum_q\left[\frac{P_qP_{-q}}{2M}+\frac12M\omega_q^2Q_qQ_{-q}\right]`, '实空间耦合振子链变成一组互不耦合的正常模。'),
        f('5.2', String.raw`Q_q^\dagger=Q_{-q},\qquad P_q^\dagger=P_{-q}`, '这保证 Hamiltonian 是厄米的。'),
        f('5.3', String.raw`H_q=\frac{P_qP_{-q}}{2M}+\frac12M\omega_q^2Q_qQ_{-q}`, '每个 q 模就是一个频率为 \(\omega_q\) 的谐振子。')
      ], ['到这里是经典对角化完成，还没“声子”。声子来自下一步量子化。'], '先得到正常模 Hamiltonian。'),
      S('06 为什么产生湮灭算符设成这个形式', [
        f('6.1', String.raw`a_q=\sqrt{\frac{M\omega_q}{2\hbar}}Q_q+\frac{i}{\sqrt{2M\hbar\omega_q}}P_{-q}`, '湮灭算符是坐标与动量的无量纲复组合。'),
        f('6.2', String.raw`a_q^\dagger=\sqrt{\frac{M\omega_q}{2\hbar}}Q_{-q}-\frac{i}{\sqrt{2M\hbar\omega_q}}P_q`, '取厄米共轭得到产生算符。'),
        f('6.3', String.raw`[a_q,a_{q′}^\dagger]=\delta_{q,q′}`, '前面的系数就是为了保证标准玻色对易关系。'),
        f('6.4', String.raw`Q_q=\sqrt{\frac{\hbar}{2M\omega_q}}(a_q+a_{-q}^\dagger)`, '由定义反解坐标。'),
        f('6.5', String.raw`P_q=-i\sqrt{\frac{M\hbar\omega_q}{2}}(a_{-q}-a_q^\dagger)`, '由定义反解动量。')
      ], ['它不是拍脑袋“设”的。目的有两个：满足玻色对易关系，并把 Hamiltonian 写成数算符。', '这和普通量子谐振子的 \(a,a^\dagger\) 完全同构。'], '说明定义动机：无量纲化、对易关系、对角化。'),
      S('07 把 a,a† 代回 Hamiltonian', [
        f('7.1', String.raw`A=\sqrt{\frac{M\omega_q}{2\hbar}},\qquad B=\frac1{\sqrt{2M\hbar\omega_q}}`, '为了展开简洁，先记两个系数。'),
        f('7.2', String.raw`a_q^\dagger a_q=(AQ_{-q}-iBP_q)(AQ_q+iBP_{-q})`, '代入定义。'),
        f('7.3', String.raw`a_q^\dagger a_q=A^2Q_{-q}Q_q+B^2P_qP_{-q}+iAB(Q_{-q}P_{-q}-P_qQ_q)`, '完全展开。'),
        f('7.4', String.raw`iAB(Q_{-q}P_{-q}-P_qQ_q)=-\frac12`, '利用 \([Q_q,P_{q′}]=i\hbar\delta_{q,q′}\) 处理交叉项。'),
        f('7.5', String.raw`\hbar\omega_q\left(a_q^\dagger a_q+\frac12\right)=\frac{P_qP_{-q}}{2M}+\frac12M\omega_q^2Q_qQ_{-q}`, '代回 \(A,B\) 后正好得到第 q 模 Hamiltonian。'),
        f('7.6', String.raw`\hat H=\sum_q\hbar\omega_q\left(a_q^\dagger a_q+\frac12\right)`, '这才是完成量子化后的结果。'),
        f('7.7', String.raw`\hat n_q=a_q^\dagger a_q,\qquad E_{\{n_q\}}=\sum_q\hbar\omega_q\left(n_q+\frac12\right)`, '数算符本征值就是该模式的声子数。')
      ], ['截图里缺的正是 7.1 到 7.5 这些代回步骤。人类教材常把最需要看的地方折叠成一句“易得”。', '零点能 \(\frac12\hbar\omega_q\) 来自坐标和动量不对易。'], '考试可以略写代数，但必须知道最终式从哪里来。'),
      S('08 Debye 热容推导', [
        f('8.1', String.raw`\bar n_q=\frac1{e^{\beta\hbar\omega_q}-1}`, '声子数不守恒，因此声子化学势为零。'),
        f('8.2', String.raw`U_T=\sum_q\hbar\omega_q\bar n_q`, '去掉不随温度变化的零点能。'),
        f('8.3', String.raw`\omega=v_sk,\qquad g(\omega)=\frac{3V}{2\pi^2v_s^3}\omega^2`, 'Debye 模型假设低能线性色散并取三支声学模式。'),
        f('8.4', String.raw`\int_0^{\omega_D}g(\omega)d\omega=3N`, '用总模式数确定 Debye 截止频率。'),
        f('8.5', String.raw`U_T=\int_0^{\omega_D}d\omega\,g(\omega)\frac{\hbar\omega}{e^{\beta\hbar\omega}-1}`, '把求和变积分。'),
        f('8.6', String.raw`T\ll\Theta_D:\ C_V\propto T^3,\qquad T\gg\Theta_D:\ C_V\to3Nk_B`, '低温 Debye T³ 定律和高温 Dulong-Petit 极限。')
      ], ['Debye 模型的局限：真实晶体有光学支、非线性色散和各向异性，球形截止只是低能近似。'], '写假设、截止和两个极限。')
    ]
  });

  setTopic('quantum','emfield',{
    label: '电磁场量子化、黑体辐射与相干态全过程',
    summary: '从电磁场能量和库伦规范出发，把场分解成横向模式，每个模式化成谐振子，再量子化成光子。',
    steps: [
      S('01 电磁场能量就是 Hamiltonian', [
        f('1.1', String.raw`H=\frac12\int d^3r\left(\epsilon_0\mathbf E^2+\frac1{\mu_0}\mathbf B^2\right)`, '电磁场能量作为 Hamiltonian。'),
        f('1.2', String.raw`\mathbf B=\nabla\times\mathbf A,\qquad \mathbf E=-\frac{\partial\mathbf A}{\partial t}-\nabla\phi`, '用矢势和标势表示场。'),
        f('1.3', String.raw`\nabla\cdot\mathbf A=0`, '库伦规范，只保留横向自由度。'),
        f('1.4', String.raw`\rho=0\Rightarrow\phi=0,\qquad \mathbf E=-\dot{\mathbf A}`, '自由辐射场可取标势为零。')
      ], ['考试要求明确写了：先掌握库伦规范和 \(A,E,B\) 的关系。'], '先写场能量与库伦规范。'),
      S('02 模展开：每个横向模式变成谐振子', [
        f('2.1', String.raw`\mathbf A(\mathbf r,t)=\sum_{\mathbf k\lambda}q_{\mathbf k\lambda}(t)\mathbf e_{\mathbf k\lambda}e^{i\mathbf k\cdot\mathbf r}`, '把矢势展开成平面波模式。'),
        f('2.2', String.raw`\mathbf k\cdot\mathbf e_{\mathbf k\lambda}=0,\qquad \lambda=1,2`, '库伦规范给出两个横向偏振。'),
        f('2.3', String.raw`\dot{\mathbf A}\sim\dot q_{\mathbf k\lambda},\qquad \nabla\times\mathbf A\sim kq_{\mathbf k\lambda}`, '电场给动能型项，磁场给势能型项。'),
        f('2.4', String.raw`\int d^3r\,e^{i(\mathbf k+\mathbf k′)\cdot\mathbf r}=V\delta_{\mathbf k′,-\mathbf k}`, '空间正交性让不同模式解耦。'),
        f('2.5', String.raw`H=\sum_{\mathbf k\lambda}\left[\frac12p_{\mathbf k\lambda}p_{-\mathbf k\lambda}+\frac12\omega_k^2q_{\mathbf k\lambda}q_{-\mathbf k\lambda}\right]`, '场 Hamiltonian 变成一堆谐振子。'),
        f('2.6', String.raw`\omega_k=c|\mathbf k|`, '自由电磁波色散。')
      ], ['这一步和声子量子化同构：场模式就是正常模。'], '必须展示从场能量到谐振子的过程。'),
      S('03 正则量子化成光子', [
        f('3.1', String.raw`[q_{\mathbf k\lambda},p_{\mathbf k′\lambda'}]=i\hbar\delta_{\mathbf k\mathbf k′}\delta_{\lambda\lambda'}`, '每个模式正则量子化。'),
        f('3.2', String.raw`a_{\mathbf k\lambda}=\sqrt{\frac{\omega_k}{2\hbar}}q_{\mathbf k\lambda}+\frac{i}{\sqrt{2\hbar\omega_k}}p_{-\mathbf k\lambda}`, '定义光子湮灭算符。'),
        f('3.3', String.raw`[a_{\mathbf k\lambda},a_{\mathbf k′\lambda'}^\dagger]=\delta_{\mathbf k\mathbf k′}\delta_{\lambda\lambda'}`, '满足玻色对易关系。'),
        f('3.4', String.raw`\hat H=\sum_{\mathbf k\lambda}\hbar\omega_k\left(a_{\mathbf k\lambda}^\dagger a_{\mathbf k\lambda}+\frac12\right)`, '每个模式的能量量子就是光子。'),
        f('3.5', String.raw`\hat n_{\mathbf k\lambda}=a_{\mathbf k\lambda}^\dagger a_{\mathbf k\lambda}`, '光子数算符。')
      ], ['光子不是预先存在的小球，而是电磁场正常模式量子化后的激发。'], '写出光子 Hamiltonian。'),
      S('04 黑体辐射从光子气推出', [
        f('4.1', String.raw`\mu_\gamma=0`, '光子数不守恒，所以平衡光子化学势为零。'),
        f('4.2', String.raw`\bar n(\omega)=\frac1{e^{\beta\hbar\omega}-1}`, '零化学势 Bose 分布。'),
        f('4.3', String.raw`g(\omega)d\omega=2\frac{V}{(2\pi)^3}4\pi k^2dk=\frac{V}{\pi^2c^3}\omega^2d\omega`, '两个偏振态给因子 2。'),
        f('4.4', String.raw`u(\omega)d\omega=\frac{\hbar\omega^3}{\pi^2c^3}\frac{d\omega}{e^{\beta\hbar\omega}-1}`, 'Planck 黑体谱。'),
        f('4.5', String.raw`u=\int_0^\infty u(\omega)d\omega=aT^4`, '积分得到 Stefan-Boltzmann 标度。')
      ], ['黑体辐射就是光子 Bose 气。'], '不要忘掉偏振因子 2。'),
      S('05 相干态从定义推展开式', [
        f('5.1', String.raw`a|\alpha\rangle=\alpha|\alpha\rangle`, '相干态定义。'),
        f('5.2', String.raw`|\alpha\rangle=\sum_{n=0}^{\infty}c_n|n\rangle`, '在数态基底展开。'),
        f('5.3', String.raw`a|\alpha\rangle=\sum_{n=0}^{\infty}c_{n+1}\sqrt{n+1}|n\rangle`, '作用湮灭算符。'),
        f('5.4', String.raw`c_{n+1}\sqrt{n+1}=\alpha c_n\Rightarrow c_n=\frac{\alpha^n}{\sqrt{n!}}c_0`, '得到递推系数。'),
        f('5.5', String.raw`c_0=e^{-|\alpha|^2/2}`, '归一化。'),
        f('5.6', String.raw`|\alpha\rangle=e^{-|\alpha|^2/2}\sum_{n=0}^{\infty}\frac{\alpha^n}{\sqrt{n!}}|n\rangle`, '相干态表达式。'),
        f('5.7', String.raw`P(n)=e^{-|\alpha|^2}\frac{|\alpha|^{2n}}{n!},\quad \Delta n/\langle n\rangle=1/|\alpha|`, '光子数服从 Poisson 分布，大光子数极限接近经典场。')
      ], ['相干态对应经典振动，是因为场平均值按经典方程振荡且相对涨落小。'], '会从本征方程推展开式。')
    ]
  });

  // 给其他量子专题补“完整推导补充”卡，避免只剩结论。
  appendStep('quantum','fdbe', S('06 完整推导补充：从巨正则迹到 ±1', [
    f('6.1', String.raw`\hat H-\mu\hat N=\sum_\alpha(\epsilon_\alpha-\mu)\hat n_\alpha`, '无相互作用量子气体按单粒子模式分解。'),
    f('6.2', String.raw`\mathcal Z=\prod_\alpha\sum_{n_\alpha}e^{-\beta(\epsilon_\alpha-\mu)n_\alpha}`, '巨正则迹在 Fock 态基底中拆成各模式求和。'),
    f('6.3', String.raw`Fermion:\ n_\alpha=0,1\Rightarrow \mathcal Z_\alpha=1+e^{-\beta(\epsilon_\alpha-\mu)}`, 'Pauli 不相容给出费米子的两项求和。'),
    f('6.4', String.raw`Boson:\ n_\alpha=0,1,2,\cdots\Rightarrow \mathcal Z_\alpha=\frac1{1-e^{-\beta(\epsilon_\alpha-\mu)}}`, '玻色子的无穷等比级数给出分母。'),
    f('6.5', String.raw`\langle n_\alpha\rangle=-\frac1\beta\frac{\partial\ln\mathcal Z}{\partial\epsilon_\alpha}`, '对能级求导得到平均占据数。'),
    f('6.6', String.raw`\langle n_\alpha\rangle_F=\frac1{e^{\beta(\epsilon_\alpha-\mu)}+1},\quad \langle n_\alpha\rangle_B=\frac1{e^{\beta(\epsilon_\alpha-\mu)}-1}`, '最终 FD/BE 分布。')
  ], ['这张卡把“从 Hamiltonian 出发”的链条补齐。'], '写出每个模式的占据数求和，±1 才有来源。'));

  appendStep('quantum','fermi', S('08 完整推导补充：DOS 到零温压强一条链', [
    f('8.1', String.raw`k_i=2\pi n_i/L\Rightarrow \sum_{\mathbf k}\to\frac{V}{(2\pi)^3}\int d^3k`, '周期边界条件给出 k 态密度。'),
    f('8.2', String.raw`g(\epsilon)d\epsilon=g_s\frac{V}{(2\pi)^3}4\pi k^2dk`, '能量壳态数。'),
    f('8.3', String.raw`\epsilon=\hbar^2k^2/(2m)\Rightarrow g(\epsilon)=g_s\frac{V}{4\pi^2}\left(\frac{2m}{\hbar^2}\right)^{3/2}\sqrt\epsilon`, '变量替换得到 3D DOS。'),
    f('8.4', String.raw`T=0:\ f(\epsilon)=\Theta(E_F-\epsilon)`, '零温费米面。'),
    f('8.5', String.raw`N=\int_0^{E_F}g(\epsilon)d\epsilon,\qquad U=\int_0^{E_F}\epsilon g(\epsilon)d\epsilon`, '粒子数和内能积分。'),
    f('8.6', String.raw`U/N=3E_F/5`, '两式相除得到平均能。'),
    f('8.7', String.raw`P=-\left(\partial U/\partial V\right)_N=\frac23\frac UV=\frac25nE_F`, '零温简并压。'),
    f('8.8', String.raw`C_V=\frac{\pi^2}{2}Nk_B\frac{T}{T_F}`, 'Sommerfeld 展开给低温热容。')
  ], ['这张卡把 DOS、零温费米球、内能和压强串成一条考试可写推导。'], '不要只背 \(U=3NE_F/5\)，要能写出两个积分。'));

  appendStep('quantum','bec', S('06 完整推导补充：临界温度与二维无 BEC', [
    f('6.1', String.raw`N=N_0+\int_0^\infty d\epsilon\,g(\epsilon)\frac1{e^{\beta(\epsilon-\mu)}-1}`, 'BEC 题必须把基态粒子数单独写出。'),
    f('6.2', String.raw`T=T_c:\quad \mu\to0,\quad N_0\to0`, '临界点激发态刚好装下所有粒子。'),
    f('6.3', String.raw`g_{3D}(\epsilon)\propto\epsilon^{1/2}`, '三维 DOS。'),
    f('6.4', String.raw`n=\lambda_{T_c}^{-3}\zeta(3/2)`, '三维临界条件。'),
    f('6.5', String.raw`T_c=\frac{2\pi\hbar^2}{mk_B}\left(\frac n{\zeta(3/2)}\right)^{2/3}`, '临界温度。'),
    f('6.6', String.raw`N_0/N=1-(T/T_c)^{3/2}`, '凝聚分数。'),
    f('6.7', String.raw`2D:\ g(\epsilon)=const,\qquad \int_0\frac{d\epsilon}{e^{\beta\epsilon}-1}\sim\int_0\frac{d\epsilon}{\epsilon}\to\infty`, '二维激发态容量低能发散，所以均匀二维理想 Bose 气无有限温 BEC。')
  ], ['二维无 BEC 的关键是低能积分发散，不是口头说“二维不行”。'], '写 \(\mu\to0\) 和积分发散。'));

  appendStep('quantum','hubbard', S('06 完整推导补充：平均场和自洽循环', [
    f('6.1', String.raw`H=-t\sum_{\langle ij\rangle\sigma}(c_{i\sigma}^\dagger c_{j\sigma}+h.c.)+U\sum_i n_{i\uparrow}n_{i\downarrow}`, 'Hubbard 模型。'),
    f('6.2', String.raw`n_{i\uparrow}n_{i\downarrow}\approx n_{i\uparrow}\langle n_\downarrow\rangle+n_{i\downarrow}\langle n_\uparrow\rangle-\langle n_\uparrow\rangle\langle n_\downarrow\rangle`, '忽略二阶涨落的平均场分解。'),
    f('6.3', String.raw`c_{i\sigma}=N^{-1/2}\sum_ke^{ikR_i}c_{k\sigma}`, 'Fourier 变换。'),
    f('6.4', String.raw`H_{MF}=\sum_{k\sigma}E_{k\sigma}c_{k\sigma}^\dagger c_{k\sigma}-NU n_\uparrow n_\downarrow`, '平均场 Hamiltonian 对角形式。'),
    f('6.5', String.raw`E_{k\uparrow}=\epsilon_k+Un_\downarrow,\qquad E_{k\downarrow}=\epsilon_k+Un_\uparrow`, '自旋极化能带。'),
    f('6.6', String.raw`m=\frac12(n_\uparrow-n_\downarrow),\qquad n_\sigma=N^{-1}\sum_kf(E_{k\sigma}-\mu)`, '自洽求解方程。'),
    f('6.7', String.raw`UD(E_F)>1`, '线性化得到 Stoner 判据。')
  ], ['平均场不是直接给结论，而是“假设序参量→求能带→算占据→更新序参量”的闭环。'], '写出分解和自洽方程。'));

  appendStep('quantum','hf-bcs', S('08 完整推导补充：HF 与 BCS 不跳步链条', [
    f('8.1', String.raw`V=\frac12\sum_{\alpha\beta\gamma\delta}V_{\alpha\beta\gamma\delta}c_\alpha^\dagger c_\beta^\dagger c_\gamma c_\delta`, '两体相互作用的二次量子化。'),
    f('8.2', String.raw`Hartree:\quad c^\dagger c^\dagger cc\to\langle c^\dagger c\rangle c^\dagger c`, '直接项。'),
    f('8.3', String.raw`Fock:\quad c^\dagger c^\dagger cc\to-\langle c^\dagger c\rangle c^\dagger c`, '交换项多负号，来自费米反对易。'),
    f('8.4', String.raw`|\Psi\rangle=\sum_k a_kc_{k\uparrow}^\dagger c_{-k\downarrow}^\dagger|F\rangle`, 'Cooper 对试探态。'),
    f('8.5', String.raw`1=VD(E_F)\int_0^{\hbar\omega_D}\frac{d\xi}{2\xi-E}\Rightarrow E<0`, '任意弱吸引导致 Cooper 不稳定。'),
    f('8.6', String.raw`\Delta_k=-\sum_{k′}V_{kk′}\langle c_{-k′\downarrow}c_{k′\uparrow}\rangle`, 'BCS 序参量。'),
    f('8.7', String.raw`E_k=\sqrt{\xi_k^2+|\Delta_k|^2}`, 'Bogoliubov 准粒子谱。'),
    f('8.8', String.raw`|BCS\rangle=\prod_k(u_k+v_kc_{k\uparrow}^\dagger c_{-k\downarrow}^\dagger)|0\rangle,\qquad \gamma_k|BCS\rangle=0`, 'BCS 基态是准粒子真空。')
  ], ['HF 是普通密度平均，BCS 是异常配对平均。两者都是平均场，但序参量不同。'], '写出 \(\Delta\)、\(E_k\)、BCS 基态。'));

  // 天体物理专题关键卡补全过程，避免只剩结论。
  appendStep('astro','fermi_count', S('完整推导补充：费米球计数', [
    f('1', String.raw`dN=2\frac{Vd^3p}{h^3}`, '每个态占相空间体积 \(h^3\)，电子自旋因子为 2。'),
    f('2', String.raw`N=2\frac{V}{h^3}\frac{4\pi}{3}p_F^3`, '零温填满半径为 \(p_F\) 的动量球。'),
    f('3', String.raw`n_e=\frac{N}{V}=\frac{p_F^3}{3\pi^2\hbar^3}`, '换成 \(\hbar\) 的标准形式。'),
    f('4', String.raw`p_F=\hbar(3\pi^2n_e)^{1/3}`, '费米动量和密度关系。')
  ], ['这是 NR/ER 简并压推导的共同起点。'], '写清自旋因子和费米球体积。'));
  appendStep('astro','nr_pressure', S('完整推导补充：NR 简并压积分', [
    f('1', String.raw`U=2\frac{V}{h^3}\int_0^{p_F}\frac{p^2}{2m_e}4\pi p^2dp`, '非相对论总动能积分。'),
    f('2', String.raw`N=2\frac{V}{h^3}\frac{4\pi}{3}p_F^3`, '粒子数积分。'),
    f('3', String.raw`U/N=3E_F/5,\qquad E_F=p_F^2/2m_e`, '两式相除得到平均动能。'),
    f('4', String.raw`P=-\left(\partial U/\partial V\right)_N=\frac23\frac UV=\frac25n_eE_F`, '零温压强。'),
    f('5', String.raw`P_{NR}=\frac{\hbar^2}{5m_e}(3\pi^2)^{2/3}n_e^{5/3}`, '非相对论简并压。')
  ], ['这张卡补上从积分到压强的全链条。'], '会写 \(U\) 积分和 \(P=-\partial U/\partial V\)。'));
  appendStep('astro','er_pressure', S('完整推导补充：ER 简并压积分', [
    f('1', String.raw`\epsilon(p)\simeq pc`, '极端相对论电子能量。'),
    f('2', String.raw`U=2\frac{V}{h^3}\int_0^{p_F}pc\,4\pi p^2dp`, '总能积分。'),
    f('3', String.raw`U/N=3p_Fc/4=3E_F/4`, '平均能。'),
    f('4', String.raw`P=-\partial U/\partial V=\frac13\frac UV=\frac14n_eE_F`, '相对论气体压强关系。'),
    f('5', String.raw`P_{ER}=\frac{\hbar c}{4}(3\pi^2)^{1/3}n_e^{4/3}`, '极端相对论简并压。')
  ], ['ER 压强标度 \(n^{4/3}\) 导致白矮星存在极限质量。'], '会比较 NR 与 ER 的密度指数。'));
  appendStep('astro','chandra', S('完整推导补充：极限质量标度', [
    f('1', String.raw`E_g\sim-GM^2/R`, '引力能。'),
    f('2', String.raw`E_k^{NR}\sim\hbar^2M^{5/3}/(m_eR^2)`, 'NR 简并动能标度。'),
    f('3', String.raw`E(R)=A M^{5/3}/R^2-BGM^2/R\Rightarrow R\propto M^{-1/3}`, '非相对论稳定半径。'),
    f('4', String.raw`E_k^{ER}\sim\hbar cM^{4/3}/R`, 'ER 简并动能标度。'),
    f('5', String.raw`E(R)=\frac1R(A\hbar cM^{4/3}-BGM^2)`, 'ER 两项都正比 \(1/R\)。'),
    f('6', String.raw`M_{Ch}\sim(\hbar c/G)^{3/2}/m_p^2`, '令括号为零得到极限质量标度。')
  ], ['NR 有能量极小值，ER 只剩质量阈值。'], '重点解释为什么 ER 情形没有稳定极小值。'));
  appendStep('astro','coulomb', S('完整推导补充：静电修正为何为负', [
    f('1', String.raw`\frac{4\pi r_0^3}{3}=\frac{Z}{n_e}`, 'Wigner-Seitz 原胞半径。'),
    f('2', String.raw`E_{ee}=\frac35\frac{Z^2e^2}{r_0}`, '均匀电子云自能。'),
    f('3', String.raw`E_{ei}=-\frac32\frac{Z^2e^2}{r_0}`, '电子云与中心离子的吸引能。'),
    f('4', String.raw`E_C=E_{ee}+E_{ei}=-\frac9{10}\frac{Z^2e^2}{r_0}`, '总静电修正为负。'),
    f('5', String.raw`P_C=-\left(\partial E_C/\partial V\right)_N<0`, '因此压强被修正得更小，EOS 软化。')
  ], ['电子-离子吸引大于电子-电子平均排斥，所以修正为负。'], '写出 \(E_{ee}\)、\(E_{ei}\)、\(P_C<0\)。'));
  appendStep('astro','tf', S('完整推导补充：Thomas-Fermi 方程', [
    f('1', String.raw`E_F=-eV(r)+\frac{p_F^2(r)}{2m_e}=const`, '局域费米能必须处处相同。'),
    f('2', String.raw`n_e(r)=\frac{p_F^3(r)}{3\pi^2\hbar^3}=\frac{[2m_e(E_F+eV)]^{3/2}}{3\pi^2\hbar^3}`, '局域费米球给局域电子密度。'),
    f('3', String.raw`\nabla^2V\propto n_e(r)`, 'Poisson 方程联立电子密度。'),
    f('4', String.raw`r=\mu x,\qquad E_F+eV=\frac{Ze^2}{r}\phi(x)`, '无量纲化。'),
    f('5', String.raw`\frac{d^2\phi}{dx^2}=\frac{\phi^{3/2}}{\sqrt x}`, '标准 TF 方程结构。')
  ], ['TF 模型比均匀电子云更进一步，允许电子密度随位置变化。'], '写局域费米球 + Poisson。'));
  appendStep('astro','npe', S('完整推导补充：中子化阈值', [
    f('1', String.raw`p+e^-\rightleftharpoons n+\nu_e`, '逆 beta 衰变反应。'),
    f('2', String.raw`\mu_p+\mu_e=\mu_n+\mu_\nu,\qquad \mu_\nu\simeq0`, 'beta 平衡。'),
    f('3', String.raw`\mu_n=\mu_p+\mu_e`, '中微子逃逸时的平衡条件。'),
    f('4', String.raw`n_p=n_e\Rightarrow p_{Fp}=p_{Fe}`, '电中性给出质子和电子费米动量关系。'),
    f('5', String.raw`\mu_i=m_ic^2\sqrt{1+x_i^2},\qquad x_i=p_{Fi}/m_ic`, '相对论费米面化学势。'),
    f('6', String.raw`x_n=0:\quad m_ec^2\sqrt{1+x_e^2}+m_pc^2\sqrt{1+x_p^2}=m_nc^2`, '中子刚出现的阈值方程。'),
    f('7', String.raw`ER:\ p_{Fn}=p_{Fp}+p_{Fe}=2p_{Fp}\Rightarrow n_n=8n_p`, '极端相对论极限的组分比例。')
  ], ['中子化来自电子费米能升高，不是普通化学反应直觉。'], '先写 beta 平衡，再写阈值。'));
  appendStep('astro','friedmann', S('完整推导补充：守恒方程与温度标度', [
    f('1', String.raw`\left(\frac{\dot R}{R}\right)^2+\frac{k}{R^2}=\frac{8\pi G}{3}\rho`, '第一 Friedmann 方程。'),
    f('2', String.raw`\frac{\ddot R}{R}=-\frac{4\pi G}{3}(\rho+3P)`, '第二 Friedmann 方程。'),
    f('3', String.raw`\dot\rho+3H(\rho+P)=0`, '由两式联立得到能量守恒。'),
    f('4', String.raw`d(\rho R^3)=-P\,d(R^3)`, '膨胀做功形式。'),
    f('5', String.raw`P=w\rho\Rightarrow \rho\propto R^{-3(1+w)}`, '状态方程给密度标度。'),
    f('6', String.raw`w=1/3:\rho_r\propto R^{-4},\qquad \rho_r\propto T^4\Rightarrow T\propto R^{-1}`, '辐射主导宇宙温度标度。')
  ], ['宇宙温度随尺度因子下降不是背结论，是由辐射状态方程和能量守恒推出。'], '会从 Friedmann 方程推出连续性方程。'));

  window.COMPLETE_DERIVATION_AUDIT = true;
})();
