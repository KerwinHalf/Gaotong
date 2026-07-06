(function(){
  const DATA = window.EXPANDED_DATA || [];
  const findTopic = (sid, tid) => {
    const s = DATA.find(x => x.id === sid);
    return s && s.topics && s.topics.find(t => t.id === tid);
  };
  const F = (n, tex, why) => `<span class="eq"><span class="mini">${n}</span><span class="math-tex">\\[${tex}\\]</span></span><span class="why">${why}</span>`;
  const S = (title, formulas, notes='', exam='') => ({ title, formulas, notes: Array.isArray(notes) ? notes : (notes ? [notes] : []), exam });
  const set = (sid, tid, patch) => { const t = findTopic(sid, tid); if (t) Object.assign(t, patch); };

  set('quantum','fdbe', {
    label: '二次量子化推出 FD / BE 分布：逐行完整推导',
    summary: '从 Fock 态、数算符、巨正则迹开始推到单模配分函数，再从 lnΞ 对能级求导得到平均占据数。这里已经把截图里那种“四个公式就草草收摊”的写法拆开，终于像个推导了。',
    core: String.raw`\hat H=\sum_\alpha \epsilon_\alpha \hat n_\alpha,\quad \bar n_\alpha=\frac{1}{e^{\beta(\epsilon_\alpha-\mu)}\pm1}`,
    steps: [
      S('01 先选多体基底：Fock 占据数表象', [
        F('1.1', String.raw`|\{n_\alpha\}\rangle=|n_1,n_2,\cdots,n_\alpha,\cdots\rangle`, '多体态不是写每个粒子的坐标，而是写每个单粒子态被占据了几次。'),
        F('1.2', String.raw`\hat n_\alpha=a_\alpha^\dagger a_\alpha`, '数算符定义。'),
        F('1.3', String.raw`\hat n_\alpha|\{n\}\rangle=n_\alpha|\{n\}\rangle`, 'Fock 态是所有数算符的共同本征态。'),
        F('1.4', String.raw`\hat N=\sum_\alpha \hat n_\alpha`, '总粒子数是各单粒子态占据数之和。')
      ], '这一步是从二次量子化形式出发的基础。'),
      S('02 理想量子气体 Hamiltonian 为什么可写成占据数求和', [
        F('2.1', String.raw`\hat H=\sum_\alpha \epsilon_\alpha a_\alpha^\dagger a_\alpha`, '无相互作用时，每个单粒子态的能量互不影响。'),
        F('2.2', String.raw`\hat H=\sum_\alpha \epsilon_\alpha \hat n_\alpha`, '用数算符改写。'),
        F('2.3', String.raw`\hat H|\{n\}\rangle=\left(\sum_\alpha \epsilon_\alpha n_\alpha\right)|\{n\}\rangle`, '多体能量本征值就是各占据能级的和。'),
        F('2.4', String.raw`E(\{n\})=\sum_\alpha \epsilon_\alpha n_\alpha`, '这一步让后面的迹能按模式拆开。')
      ]),
      S('03 巨正则里真正出现的是 H-μN', [
        F('3.1', String.raw`\hat H-\mu\hat N=\sum_\alpha \epsilon_\alpha\hat n_\alpha-\mu\sum_\alpha\hat n_\alpha`, '把 H 和 N 都写成数算符。'),
        F('3.2', String.raw`\hat H-\mu\hat N=\sum_\alpha(\epsilon_\alpha-\mu)\hat n_\alpha`, '同一模式的系数合并。'),
        F('3.3', String.raw`(\hat H-\mu\hat N)|\{n\}\rangle=\sum_\alpha(\epsilon_\alpha-\mu)n_\alpha|\{n\}\rangle`, '在 Fock 态上变成普通数。'),
        F('3.4', String.raw`x_\alpha\equiv\epsilon_\alpha-\mu`, '后面把这个量记为 xα。')
      ], '巨正则推导如果不出现 H-μN，就已经在门口摔了。'),
      S('04 巨配分函数的迹如何展开', [
        F('4.1', String.raw`\Xi=\operatorname{Tr}\,e^{-\beta(\hat H-\mu\hat N)}`, '巨配分函数定义。'),
        F('4.2', String.raw`\Xi=\sum_{\{n_\alpha\}}\langle\{n\}|e^{-\beta(\hat H-\mu\hat N)}|\{n\}\rangle`, '迹就是对完整 Fock 基求和。'),
        F('4.3', String.raw`\Xi=\sum_{\{n_\alpha\}}e^{-\beta\sum_\alpha(\epsilon_\alpha-\mu)n_\alpha}`, '指数算符作用到本征态后变成数值指数。'),
        F('4.4', String.raw`e^{-\beta\sum_\alpha x_\alpha n_\alpha}=\prod_\alpha e^{-\beta x_\alpha n_\alpha}`, '指数的和变成乘积。')
      ]),
      S('05 为什么总配分函数能分解成单模式乘积', [
        F('5.1', String.raw`\Xi=\sum_{n_1}\sum_{n_2}\cdots\prod_\alpha e^{-\beta x_\alpha n_\alpha}`, '把对全部占据数组合的求和写成多重求和。'),
        F('5.2', String.raw`\Xi=\prod_\alpha\left(\sum_{n_\alpha}e^{-\beta x_\alpha n_\alpha}\right)`, '每个模式独立，所以求和可以因式分解。'),
        F('5.3', String.raw`\Xi=\prod_\alpha\Xi_\alpha`, '定义单模式巨配分函数。'),
        F('5.4', String.raw`\ln\Xi=\sum_\alpha\ln\Xi_\alpha`, '乘积取对数变成求和。')
      ], '这一行经常被简略答案吞掉，吞得跟没发生过一样。'),
      S('06 Fermion：单模式只允许 n=0,1', [
        F('6.1', String.raw`n_\alpha=0,1`, 'Pauli 不相容原理限制每个费米单粒子态最多一个粒子。'),
        F('6.2', String.raw`\Xi^F_\alpha=\sum_{n=0}^{1}e^{-\beta x_\alpha n}`, '单模式只求两项。'),
        F('6.3', String.raw`\Xi^F_\alpha=e^0+e^{-\beta x_\alpha}`, '把 n=0 和 n=1 分别代入。'),
        F('6.4', String.raw`\Xi^F_\alpha=1+e^{-\beta(\epsilon_\alpha-\mu)}`, '得到费米单模式配分函数。'),
        F('6.5', String.raw`\ln\Xi_F=\sum_\alpha\ln\left[1+e^{-\beta(\epsilon_\alpha-\mu)}\right]`, '总费米巨配分函数。')
      ]),
      S('07 Boson：单模式允许 n=0,1,2,...', [
        F('7.1', String.raw`n_\alpha=0,1,2,\cdots`, '玻色子没有 Pauli 排斥，同一模式可多重占据。'),
        F('7.2', String.raw`\Xi^B_\alpha=\sum_{n=0}^{\infty}e^{-\beta x_\alpha n}`, '写出单模式求和。'),
        F('7.3', String.raw`\Xi^B_\alpha=\sum_{n=0}^{\infty}\left(e^{-\beta x_\alpha}\right)^n`, '识别几何级数。'),
        F('7.4', String.raw`\Xi^B_\alpha=\frac{1}{1-e^{-\beta x_\alpha}}`, '几何级数求和。'),
        F('7.5', String.raw`x_\alpha>0\Rightarrow \epsilon_\alpha>\mu`, '收敛条件：化学势不能超过最低能级。'),
        F('7.6', String.raw`\ln\Xi_B=-\sum_\alpha\ln\left[1-e^{-\beta(\epsilon_\alpha-\mu)}\right]`, '总玻色巨配分函数。')
      ]),
      S('08 平均占据数为什么能由 lnΞ 对 ε 求导得到', [
        F('8.1', String.raw`\bar n_\alpha=\frac{1}{\Xi}\sum_{\{n\}}n_\alpha e^{-\beta\sum_\gamma x_\gamma n_\gamma}`, '平均占据数定义。'),
        F('8.2', String.raw`\frac{\partial \Xi}{\partial \epsilon_\alpha}=\sum_{\{n\}}(-\beta n_\alpha)e^{-\beta\sum_\gamma x_\gamma n_\gamma}`, '对 εα 求导会把 nα 拉下来。'),
        F('8.3', String.raw`\frac{\partial\ln\Xi}{\partial\epsilon_\alpha}=\frac{1}{\Xi}\frac{\partial\Xi}{\partial\epsilon_\alpha}`, 'ln 的导数。'),
        F('8.4', String.raw`\frac{\partial\ln\Xi}{\partial\epsilon_\alpha}=-\beta\bar n_\alpha`, '与平均占据定义比较。'),
        F('8.5', String.raw`\bar n_\alpha=-\frac{1}{\beta}\frac{\partial\ln\Xi}{\partial\epsilon_\alpha}`, '平均占据求导公式。')
      ]),
      S('09 推出 Fermi-Dirac 分布', [
        F('9.1', String.raw`\ln\Xi_F=\sum_\gamma\ln(1+e^{-\beta x_\gamma})`, '从费米巨配分函数开始。'),
        F('9.2', String.raw`\frac{\partial\ln\Xi_F}{\partial\epsilon_\alpha}=\frac{-\beta e^{-\beta x_\alpha}}{1+e^{-\beta x_\alpha}}`, '只有 γ=α 的项对 εα 有贡献。'),
        F('9.3', String.raw`\bar n^F_\alpha=-\frac{1}{\beta}\frac{-\beta e^{-\beta x_\alpha}}{1+e^{-\beta x_\alpha}}`, '代入占据数求导公式。'),
        F('9.4', String.raw`\bar n^F_\alpha=\frac{e^{-\beta x_\alpha}}{1+e^{-\beta x_\alpha}}`, '先得到指数负号形式。'),
        F('9.5', String.raw`\bar n^F_\alpha=\frac{1}{e^{\beta(\epsilon_\alpha-\mu)}+1}`, '上下同乘 e^{βxα}。')
      ]),
      S('10 推出 Bose-Einstein 分布', [
        F('10.1', String.raw`\ln\Xi_B=-\sum_\gamma\ln(1-e^{-\beta x_\gamma})`, '从玻色巨配分函数开始。'),
        F('10.2', String.raw`\frac{\partial\ln\Xi_B}{\partial\epsilon_\alpha}=-\frac{\beta e^{-\beta x_\alpha}}{1-e^{-\beta x_\alpha}}`, '链式法则，注意负号。'),
        F('10.3', String.raw`\bar n^B_\alpha=\frac{e^{-\beta x_\alpha}}{1-e^{-\beta x_\alpha}}`, '代入占据数公式。'),
        F('10.4', String.raw`\bar n^B_\alpha=\frac{1}{e^{\beta(\epsilon_\alpha-\mu)}-1}`, '整理得到 Bose-Einstein 分布。')
      ]),
      S('11 经典极限检查', [
        F('11.1', String.raw`e^{\beta(\epsilon_\alpha-\mu)}\gg1`, '高温低密度时成立。'),
        F('11.2', String.raw`\bar n^F_\alpha\simeq e^{-\beta(\epsilon_\alpha-\mu)}`, '费米分母中的 +1 可忽略。'),
        F('11.3', String.raw`\bar n^B_\alpha\simeq e^{-\beta(\epsilon_\alpha-\mu)}`, '玻色分母中的 -1 也可忽略。'),
        F('11.4', String.raw`\bar n_\alpha\simeq z e^{-\beta\epsilon_\alpha},\quad z=e^{\beta\mu}`, '回到 Maxwell-Boltzmann 分布。')
      ])
    ]
  });

  set('quantum','phonon', {
    label: '一维原子链声子量子化：逐行完整推导',
    summary: '从实空间原子链 Hamiltonian 出发，逐步 Fourier 对角化，得到正常模谐振子，再定义产生/湮灭算符并代回 Hamiltonian。重点补上“为什么这样定义 a 与 a†”和“代回去怎么得到声子 Hamiltonian”。',
    core: String.raw`H=\sum_q\hbar\omega_q\left(a_q^\dagger a_q+\frac12\right)`,
    steps: [
      S('01 从原子的平衡位置和位移开始', [
        F('1.1', String.raw`R_n^0=na`, '第 n 个原子的平衡位置。'),
        F('1.2', String.raw`R_n=R_n^0+u_n`, '实际位置等于平衡位置加小位移。'),
        F('1.3', String.raw`p_n=M\dot u_n`, '位移的共轭动量。'),
        F('1.4', String.raw`[\hat u_n,\hat p_m]=i\hbar\delta_{nm}`, '量子化时的正则对易关系。')
      ]),
      S('02 写出实空间 Hamiltonian', [
        F('2.1', String.raw`T=\sum_n\frac{p_n^2}{2M}`, '所有原子的振动动能。'),
        F('2.2', String.raw`V=\frac K2\sum_n(u_{n+1}-u_n)^2`, '最近邻谐近似势能。'),
        F('2.3', String.raw`H=\sum_n\frac{p_n^2}{2M}+\frac K2\sum_n(u_{n+1}-u_n)^2`, '一维单原子链 Hamiltonian。'),
        F('2.4', String.raw`u_n\rightarrow u_n+C\Rightarrow V\ \text{不变}`, '整体平移不产生弹性能，所以有声学模式。')
      ]),
      S('03 Fourier 变换到正常模', [
        F('3.1', String.raw`u_n=\frac1{\sqrt N}\sum_q Q_qe^{iqna}`, '把局域位移展开成集体振动模式。'),
        F('3.2', String.raw`p_n=\frac1{\sqrt N}\sum_q P_qe^{-iqna}`, '动量也展开为正常模。'),
        F('3.3', String.raw`Q_q=\frac1{\sqrt N}\sum_nu_ne^{-iqna}`, '反变换。'),
        F('3.4', String.raw`P_q=\frac1{\sqrt N}\sum_np_ne^{iqna}`, '动量反变换。'),
        F('3.5', String.raw`\sum_ne^{i(q-q')na}=N\delta_{q,q'}`, '周期边界条件下的正交关系。')
      ]),
      S('04 动能项完整对角化', [
        F('4.1', String.raw`T=\frac1{2M}\sum_np_n^2`, '从动能项出发。'),
        F('4.2', String.raw`T=\frac1{2MN}\sum_{n,q,q'}P_qP_{q'}e^{-i(q+q')na}`, '代入 p_n 的 Fourier 展开。'),
        F('4.3', String.raw`\sum_ne^{-i(q+q')na}=N\delta_{q',-q}`, '正交关系筛掉交叉项。'),
        F('4.4', String.raw`T=\frac1{2M}\sum_qP_qP_{-q}`, '动能变成正常模的对角和。')
      ]),
      S('05 势能项完整对角化', [
        F('5.1', String.raw`u_{n+1}-u_n=\frac1{\sqrt N}\sum_qQ_qe^{iqna}(e^{iqa}-1)`, '相邻位移差。'),
        F('5.2', String.raw`V=\frac K{2N}\sum_{n,q,q'}Q_qQ_{q'}e^{i(q+q')na}(e^{iqa}-1)(e^{iq'a}-1)`, '把平方完全展开。'),
        F('5.3', String.raw`q'=-q`, '由 n 求和给出的选择规则。'),
        F('5.4', String.raw`(e^{iqa}-1)(e^{-iqa}-1)=2-e^{iqa}-e^{-iqa}`, '代入 q′=-q。'),
        F('5.5', String.raw`2-e^{iqa}-e^{-iqa}=2-2\cos qa=4\sin^2\frac{qa}{2}`, '用三角恒等式。'),
        F('5.6', String.raw`V=2K\sum_q\sin^2\frac{qa}{2}Q_qQ_{-q}`, '势能对角化结果。')
      ]),
      S('06 识别色散关系', [
        F('6.1', String.raw`V=\frac12\sum_qM\omega_q^2Q_qQ_{-q}`, '把势能写成谐振子标准形式。'),
        F('6.2', String.raw`\frac12M\omega_q^2=2K\sin^2\frac{qa}{2}`, '比较系数。'),
        F('6.3', String.raw`\omega_q=2\sqrt{\frac KM}\left|\sin\frac{qa}{2}\right|`, '声子色散。'),
        F('6.4', String.raw`qa\ll1\Rightarrow \omega_q\simeq a\sqrt{K/M}|q|`, '长波极限线性色散。'),
        F('6.5', String.raw`v_s=a\sqrt{K/M}`, '声速。')
      ]),
      S('07 正常模 Hamiltonian', [
        F('7.1', String.raw`H=\sum_q\left[\frac{P_qP_{-q}}{2M}+\frac12M\omega_q^2Q_qQ_{-q}\right]`, '每个 q 模式都是一个谐振子。'),
        F('7.2', String.raw`Q_q^\dagger=Q_{-q},\quad P_q^\dagger=P_{-q}`, '保证 H 是厄米的。'),
        F('7.3', String.raw`[Q_q,P_{q'}]=i\hbar\delta_{q,q'}`, '正常模的正则对易关系。')
      ]),
      S('08 为什么产生湮灭算符要这样定义', [
        F('8.1', String.raw`a_q=\sqrt{\frac{M\omega_q}{2\hbar}}Q_q+\frac{i}{\sqrt{2M\hbar\omega_q}}P_{-q}`, '把坐标和动量组合成无量纲算符。'),
        F('8.2', String.raw`a_q^\dagger=\sqrt{\frac{M\omega_q}{2\hbar}}Q_{-q}-\frac{i}{\sqrt{2M\hbar\omega_q}}P_q`, '厄米共轭。'),
        F('8.3', String.raw`[a_q,a_{q'}^\dagger]=\delta_{q,q'}`, '系数选择保证标准玻色对易关系。'),
        F('8.4', String.raw`[a_q,a_{q'}]=[a_q^\dagger,a_{q'}^\dagger]=0`, '不同声子模式满足玻色代数。'),
        F('8.5', String.raw`\text{目的：把 }Q^2+P^2\text{ 写成 }a^\dagger a+1/2`, '这就是这种定义的动机。')
      ]),
      S('09 反解 Q 和 P', [
        F('9.1', String.raw`Q_q=\sqrt{\frac{\hbar}{2M\omega_q}}(a_q+a_{-q}^\dagger)`, '由 a 与 a† 相加得到坐标。'),
        F('9.2', String.raw`P_q=-i\sqrt{\frac{M\hbar\omega_q}{2}}(a_{-q}-a_q^\dagger)`, '由 a 与 a† 相减得到动量。'),
        F('9.3', String.raw`Q_{-q}=\sqrt{\frac{\hbar}{2M\omega_q}}(a_{-q}+a_q^\dagger)`, 'q 换成 -q。'),
        F('9.4', String.raw`P_{-q}=-i\sqrt{\frac{M\hbar\omega_q}{2}}(a_q-a_{-q}^\dagger)`, '同理得到 P_{-q}。')
      ]),
      S('10 把 a,a† 代回 Hamiltonian', [
        F('10.1', String.raw`\frac{P_qP_{-q}}{2M}=\frac{\hbar\omega_q}{4}(a_{-q}-a_q^\dagger)(a_{-q}^\dagger-a_q)`, '动能项代入。'),
        F('10.2', String.raw`\frac12M\omega_q^2Q_qQ_{-q}=\frac{\hbar\omega_q}{4}(a_q+a_{-q}^\dagger)(a_{-q}+a_q^\dagger)`, '势能项代入。'),
        F('10.3', String.raw`\frac{P_qP_{-q}}{2M}+\frac12M\omega_q^2Q_qQ_{-q}=\frac{\hbar\omega_q}{2}(a_q^\dagger a_q+a_{-q}^\dagger a_{-q}+1)`, '展开并用 [a,a†]=1 整理。'),
        F('10.4', String.raw`H=\sum_q\hbar\omega_q\left(a_q^\dagger a_q+\frac12\right)`, '对所有 q 求和，避免重复计数后得到标准声子 Hamiltonian。')
      ], '这就是你截图里缺失的核心过程。'),
      S('11 声子数与能级', [
        F('11.1', String.raw`\hat n_q=a_q^\dagger a_q`, '声子数算符。'),
        F('11.2', String.raw`\hat n_q|n_q\rangle=n_q|n_q\rangle`, '数态本征值。'),
        F('11.3', String.raw`E_{\{n_q\}}=\sum_q\hbar\omega_q\left(n_q+\frac12\right)`, '多声子态能量。'),
        F('11.4', String.raw`a_q^\dagger|n_q\rangle=\sqrt{n_q+1}|n_q+1\rangle`, '产生一个 q 声子。'),
        F('11.5', String.raw`a_q|n_q\rangle=\sqrt{n_q}|n_q-1\rangle`, '湮灭一个 q 声子。')
      ]),
      S('12 Debye 热容推导链', [
        F('12.1', String.raw`\bar n(\omega)=\frac1{e^{\beta\hbar\omega}-1}`, '声子是玻色子，化学势为 0。'),
        F('12.2', String.raw`U=\int_0^{\omega_D}\hbar\omega\,g(\omega)\bar n(\omega)d\omega`, '声子热内能。'),
        F('12.3', String.raw`g(\omega)=\frac{9N}{\omega_D^3}\omega^2`, 'Debye 三维态密度。'),
        F('12.4', String.raw`x=\frac{\hbar\omega}{k_BT}`, '无量纲化。'),
        F('12.5', String.raw`C_V\propto T^3\quad(T\ll\Theta_D)`, '低温 Debye T^3 律。'),
        F('12.6', String.raw`C_V\to3Nk_B\quad(T\gg\Theta_D)`, '高温 Dulong-Petit 极限。')
      ])
    ]
  });

  set('ensemble','canonical', {
    label: '正则、巨正则与涨落等价：逐行完整推导',
    summary: '从正则配分函数推出 F 和能量涨落，再从巨正则配分函数推出 Ω=-PV。每一步偏导都写出来，避免“公式索引式复习”这种学术自毁。',
    core: String.raw`F=-k_BT\ln Z,\quad \Omega=-k_BT\ln\Xi=-PV,\quad \langle(\Delta E)^2\rangle=k_BT^2C_V`,
    steps: [
      S('01 正则概率与配分函数', [F('1.1',String.raw`p_i=e^{-\beta E_i}/Z`,'最大熵得到的正则概率。'),F('1.2',String.raw`Z=\sum_ie^{-\beta E_i}`,'归一化因子。'),F('1.3',String.raw`\sum_ip_i=1`,'检验归一化。')]),
      S('02 内能公式', [F('2.1',String.raw`\partial_\beta Z=\sum_i(-E_i)e^{-\beta E_i}`,'对 β 求导。'),F('2.2',String.raw`\partial_\beta\ln Z=Z^{-1}\partial_\beta Z`,'ln 导数。'),F('2.3',String.raw`\partial_\beta\ln Z=-\langle E\rangle=-U`,'识别平均能量。'),F('2.4',String.raw`U=-\partial_\beta\ln Z`,'内能统计表达式。')]),
      S('03 自由能公式', [F('3.1',String.raw`\ln p_i=-\beta E_i-\ln Z`,'取对数。'),F('3.2',String.raw`S=-k_B\sum_ip_i\ln p_i=k_B\beta U+k_B\ln Z`,'代入 Gibbs 熵。'),F('3.3',String.raw`F=U-TS`,'Helmholtz 自由能。'),F('3.4',String.raw`F=U-T(k_B\beta U+k_B\ln Z)=-k_BT\ln Z`,'利用 kBTβ=1。')]),
      S('04 由 F 读出热力学量', [F('4.1',String.raw`dU=T\,dS-P\,dV+\mu\,dN`,'基本热力学关系。'),F('4.2',String.raw`dF=d(U-TS)=dU-TdS-SdT`,'求微分。'),F('4.3',String.raw`dF=-S\,dT-P\,dV+\mu\,dN`,'整理。'),F('4.4',String.raw`P=-(\partial F/\partial V)_{T,N}`,'压强偏导。')]),
      S('05 能量涨落的二阶导数', [F('5.1',String.raw`\partial_\beta^2Z=\sum_iE_i^2e^{-\beta E_i}`,'二阶导数。'),F('5.2',String.raw`\partial_\beta^2\ln Z=\frac{\partial_\beta^2Z}{Z}-\left(\frac{\partial_\beta Z}{Z}\right)^2`,'ln 二阶导。'),F('5.3',String.raw`\partial_\beta^2\ln Z=\langle E^2\rangle-\langle E\rangle^2`,'得到方差。'),F('5.4',String.raw`\langle(\Delta E)^2\rangle=-\partial_\beta U`,'结合 U=-∂βlnZ。')]),
      S('06 涨落与热容', [F('6.1',String.raw`\beta=1/(k_BT)`,'β 与温度关系。'),F('6.2',String.raw`\partial T/\partial\beta=-k_BT^2`,'变量变换。'),F('6.3',String.raw`\partial_\beta U=C_V\partial_\beta T=-k_BT^2C_V`,'用热容定义。'),F('6.4',String.raw`\langle(\Delta E)^2\rangle=k_BT^2C_V`,'能量涨落公式。')]),
      S('07 系综等价', [F('7.1',String.raw`U\propto N,\quad C_V\propto N`,'广延量。'),F('7.2',String.raw`\sqrt{\langle(\Delta E)^2\rangle}\propto\sqrt N`,'涨落绝对量。'),F('7.3',String.raw`\frac{\sqrt{\langle(\Delta E)^2\rangle}}{U}\propto N^{-1/2}\to0`,'相对涨落消失。')]),
      S('08 巨正则分布', [F('8.1',String.raw`\rho_G=\Xi^{-1}e^{-\beta(H-\mu N)}`,'巨正则密度算符。'),F('8.2',String.raw`\Xi=\operatorname{Tr}e^{-\beta(H-\mu N)}`,'巨配分函数。'),F('8.3',String.raw`\Omega=-k_BT\ln\Xi`,'巨势统计表达式。')]),
      S('09 Ω=-PV 的推导', [F('9.1',String.raw`\Omega=U-TS-\mu N`,'巨势定义。'),F('9.2',String.raw`d\Omega=-S\,dT-P\,dV-N\,d\mu`,'全微分。'),F('9.3',String.raw`(\partial\Omega/\partial V)_{T,\mu}=-P`,'比较系数。'),F('9.4',String.raw`\Omega=V\omega(T,\mu)`,'均匀体系广延性。'),F('9.5',String.raw`\omega=-P\Rightarrow\Omega=-PV`,'得到状态方程形式。')])
    ]
  });

  set('quantum','fermi', {
    label: 'DOS、零温 Fermi 气与 Sommerfeld 展开：逐行完整推导',
    summary: '从周期边界条件数 k 态开始，推 DOS、费米能、零温内能、简并压和 Sommerfeld 热容。',
    core: String.raw`g_{3D}(\epsilon)\propto\epsilon^{1/2},\quad U=\frac35NE_F,\quad P=\frac25nE_F`,
    steps: [
      S('01 周期边界条件给出 k 态密度',[F('1.1',String.raw`\psi(x+L)=\psi(x)\Rightarrow e^{ikL}=1`,'周期边界。'),F('1.2',String.raw`k_i=2\pi n_i/L`,'允许波矢。'),F('1.3',String.raw`\Delta k_x\Delta k_y\Delta k_z=(2\pi/L)^3`,'每个态的 k 空间体积。'),F('1.4',String.raw`\sum_{\mathbf k}\to V(2\pi)^{-3}\int d^3k`,'求和变积分。')]),
      S('02 三维 DOS',[F('2.1',String.raw`dN=g_s\frac{V}{(2\pi)^3}4\pi k^2dk`,'球壳计数。'),F('2.2',String.raw`\epsilon=\hbar^2k^2/(2m)`,'色散关系。'),F('2.3',String.raw`dk/d\epsilon=m/(\hbar^2k)`,'换变量。'),F('2.4',String.raw`g(\epsilon)=g_s\frac{V}{4\pi^2}\left(\frac{2m}{\hbar^2}\right)^{3/2}\epsilon^{1/2}`,'三维 DOS。')]),
      S('03 维度依赖',[F('3.1',String.raw`g_d(\epsilon)d\epsilon\propto k^{d-1}dk`,'d 维壳层。'),F('3.2',String.raw`k\propto\epsilon^{1/2},\quad dk\propto\epsilon^{-1/2}d\epsilon`,'换变量。'),F('3.3',String.raw`g_d(\epsilon)\propto\epsilon^{d/2-1}`,'通式。'),F('3.4',String.raw`d=1:\epsilon^{-1/2},\quad d=2:\epsilon^0,\quad d=3:\epsilon^{1/2}`,'三种常考形状。')]),
      S('04 零温填充与费米能',[F('4.1',String.raw`f(\epsilon,T=0)=\Theta(E_F-\epsilon)`,'费米分布变阶跃。'),F('4.2',String.raw`N=\int_0^{E_F}g(\epsilon)d\epsilon`,'粒子数方程。'),F('4.3',String.raw`n=k_F^3/(3\pi^2)`,'电子自旋简并为 2。'),F('4.4',String.raw`E_F=\hbar^2k_F^2/(2m)`,'费米能。')]),
      S('05 零温内能',[F('5.1',String.raw`U=\int_0^{E_F}\epsilon g(\epsilon)d\epsilon`,'内能积分。'),F('5.2',String.raw`g(\epsilon)=C\epsilon^{1/2}`,'三维 DOS。'),F('5.3',String.raw`U=\frac{2C}{5}E_F^{5/2},\quad N=\frac{2C}{3}E_F^{3/2}`,'两个幂函数积分。'),F('5.4',String.raw`U=\frac35NE_F`,'零温平均能量。')]),
      S('06 简并压',[F('6.1',String.raw`P=-(\partial U/\partial V)_N`,'压强定义。'),F('6.2',String.raw`E_F\propto(N/V)^{2/3}`,'费米能体积依赖。'),F('6.3',String.raw`P=\frac25nE_F`,'零温非相对论简并压。'),F('6.4',String.raw`P\propto n^{5/3}`,'白矮星 NR 简并压标度。')]),
      S('07 Sommerfeld 展开',[F('7.1',String.raw`\int_0^\infty\phi(\epsilon)f(\epsilon)d\epsilon=\int_0^\mu\phi(\epsilon)d\epsilon+\frac{\pi^2}{6}(k_BT)^2\phi'(\mu)+\cdots`,'展开公式。'),F('7.2',String.raw`\mu=E_F\left[1-\frac{\pi^2}{12}(k_BT/E_F)^2+\cdots\right]`,'固定 N 时 μ 修正。'),F('7.3',String.raw`U(T)=U(0)+\frac{\pi^2}{4}N(k_BT)^2/E_F+\cdots`,'内能低温修正。'),F('7.4',String.raw`C_V=\frac{\pi^2}{2}Nk_B(T/T_F)`,'电子热容线性于 T。')])
    ]
  });

  set('quantum','emfield', {
    label: '电磁场量子化、黑体辐射与相干态：逐行完整推导',
    summary: '从库伦规范下的场能量出发，把每个电磁场模式化成谐振子，再量子化为光子。',
    core: String.raw`H=\sum_{\mathbf k\lambda}\hbar\omega_k(a_{\mathbf k\lambda}^\dagger a_{\mathbf k\lambda}+1/2)`,
    steps: [
      S('01 场能量就是 Hamiltonian',[F('1.1',String.raw`H=\frac12\int d^3r(\epsilon_0\mathbf E^2+\mu_0^{-1}\mathbf B^2)`,'电磁场能量。'),F('1.2',String.raw`\nabla\cdot\mathbf A=0`,'库伦规范。'),F('1.3',String.raw`\mathbf E=-\partial_t\mathbf A,\quad \mathbf B=\nabla\times\mathbf A`,'场与矢势关系。')]),
      S('02 模展开',[F('2.1',String.raw`\mathbf A=\sum_{\mathbf k\lambda}q_{\mathbf k\lambda}(t)\mathbf e_{\mathbf k\lambda}e^{i\mathbf k\cdot\mathbf r}`,'平面波展开。'),F('2.2',String.raw`\mathbf k\cdot\mathbf e_{\mathbf k\lambda}=0`,'横向偏振。'),F('2.3',String.raw`\omega_k=c|\mathbf k|`,'光子色散。'),F('2.4',String.raw`\int e^{i(\mathbf k-\mathbf k')\cdot\mathbf r}d^3r=V\delta_{\mathbf k\mathbf k'}`,'正交性。')]),
      S('03 化成一堆谐振子',[F('3.1',String.raw`H=\sum_{\mathbf k\lambda}\left(\frac{p_{\mathbf k\lambda}^2}{2}+\frac12\omega_k^2q_{\mathbf k\lambda}^2\right)`,'每个模式是谐振子。'),F('3.2',String.raw`[q_{\mathbf k\lambda},p_{\mathbf k'\lambda'}]=i\hbar\delta_{\mathbf k\mathbf k'}\delta_{\lambda\lambda'}`,'正则量子化。'),F('3.3',String.raw`a_{\mathbf k\lambda}=\sqrt{\omega_k/(2\hbar)}q+i p/\sqrt{2\hbar\omega_k}`,'定义湮灭算符。'),F('3.4',String.raw`H=\sum_{\mathbf k\lambda}\hbar\omega_k(a^\dagger a+1/2)`,'光子 Hamiltonian。')]),
      S('04 黑体辐射',[F('4.1',String.raw`\mu_\gamma=0`,'光子数不守恒。'),F('4.2',String.raw`\bar n(\omega)=1/(e^{\beta\hbar\omega}-1)`,'光子玻色分布。'),F('4.3',String.raw`g(\omega)d\omega=V\omega^2d\omega/(\pi^2c^3)`,'含两个偏振的 DOS。'),F('4.4',String.raw`u(\omega)=\frac{\hbar\omega^3}{\pi^2c^3}\frac1{e^{\beta\hbar\omega}-1}`,'Planck 谱。')]),
      S('05 相干态',[F('5.1',String.raw`a|\alpha\rangle=\alpha|\alpha\rangle`,'相干态定义。'),F('5.2',String.raw`|\alpha\rangle=e^{-|\alpha|^2/2}\sum_n\alpha^n|n\rangle/\sqrt{n!}`,'数态展开。'),F('5.3',String.raw`\langle n\rangle=|\alpha|^2,\quad \Delta n^2=|\alpha|^2`,'泊松统计。'),F('5.4',String.raw`\langle E(t)\rangle\propto\mathrm{Re}(\alpha e^{-i\omega t})`,'对应经典振动。')])
    ]
  });

  set('astro','degenerate-matter', {
    label: '简并物质 EOS、静电修正、Thomas-Fermi 与 n-p-e：逐行完整推导',
    summary: '把一般相对论简并电子气、Wigner-Seitz 静电修正、Thomas-Fermi 非均匀电子分布、n-p-e β 平衡和中子化阈值连成完整推导。',
    core: String.raw`P_{NR}\propto n_e^{5/3},\quad P_{ER}\propto n_e^{4/3},\quad \mu_e+\mu_p=\mu_n`,
    steps: [
      S('01 费米球计数',[F('1.1',String.raw`N=2\frac{V}{h^3}\frac{4\pi p_F^3}{3}`,'相空间计数。'),F('1.2',String.raw`n_e=p_F^3/(3\pi^2\hbar^3)`,'电子数密度。'),F('1.3',String.raw`p_F=\hbar(3\pi^2n_e)^{1/3}`,'费米动量。')]),
      S('02 NR 简并压',[F('2.1',String.raw`E_F=p_F^2/(2m_e)`,'非相对论。'),F('2.2',String.raw`U=3NE_F/5`,'平均动能。'),F('2.3',String.raw`P=-(\partial U/\partial V)_N=2n_eE_F/5`,'压强。'),F('2.4',String.raw`P_{NR}=\frac{\hbar^2}{5m_e}(3\pi^2)^{2/3}n_e^{5/3}`,'NR 结果。')]),
      S('03 ER 简并压',[F('3.1',String.raw`E=pc`,'极端相对论。'),F('3.2',String.raw`U=3Np_Fc/4`,'平均能量。'),F('3.3',String.raw`P_{ER}=\frac14(3\pi^2)^{1/3}\hbar c\,n_e^{4/3}`,'ER 结果。')]),
      S('04 Wigner-Seitz 静电修正',[F('4.1',String.raw`\frac43\pi r_0^3n_N=1`,'一个原胞一个核。'),F('4.2',String.raw`n_e=Z/(4\pi r_0^3/3)`,'电中性。'),F('4.3',String.raw`E_C\sim-\frac{9}{10}\frac{Z^2e^2}{r_0}`,'均匀电子背景的静电能。'),F('4.4',String.raw`P_C=-\partial E_C/\partial V<0`,'静电修正软化 EOS。')]),
      S('05 Thomas-Fermi 局域费米球',[F('5.1',String.raw`E_F=-eV(r)+p_F^2(r)/(2m_e)`,'局域费米能处处相同。'),F('5.2',String.raw`n_e(r)=\frac{8\pi}{3h^3}p_F^3(r)`,'局域数密度。'),F('5.3',String.raw`\nabla^2V=4\pi en_e-4\pi Ze\delta(\mathbf r)`,'Poisson 方程。'),F('5.4',String.raw`d^2\phi/dx^2=\phi^{3/2}/\sqrt x`,'无量纲 TF 方程。')]),
      S('06 n-p-e β 平衡',[F('6.1',String.raw`p+e^-\leftrightarrow n+\nu_e`,'逆 β 衰变。'),F('6.2',String.raw`\mu_p+\mu_e=\mu_n+\mu_\nu`,'化学平衡。'),F('6.3',String.raw`\mu_\nu\simeq0\Rightarrow\mu_p+\mu_e=\mu_n`,'中微子逃逸。'),F('6.4',String.raw`n_p=n_e`,'电中性条件。')]),
      S('07 中子化阈值',[F('7.1',String.raw`\mu_e+m_pc^2\simeq m_nc^2`,'阈值估算。'),F('7.2',String.raw`\mu_e^2=m_e^2c^4+p_{Fe}^2c^2`,'电子化学势。'),F('7.3',String.raw`p_{Fe}c=\sqrt{(m_n-m_p)^2c^4-m_e^2c^4}`,'阈值费米动量。'),F('7.4',String.raw`n_e=p_{Fe}^3/(3\pi^2\hbar^3)`,'阈值密度。')])
    ]
  });

  /* 最后兜底：把仍然短小的专题自动拆成更多可见步骤，避免旧版“三四个大卡片”继续装死。 */
  DATA.forEach(sec => (sec.topics || []).forEach(t => {
    if (!t.steps || !t.steps.length) return;
    if (t.steps.length >= 7) return;
    const expanded = [];
    t.steps.forEach((s, si) => {
      expanded.push({ title: s.title || `第 ${si+1} 组推导`, formulas: s.formulas || [], notes: s.notes || [], exam: s.exam || '' });
      const formulas = s.formulas || [];
      formulas.forEach((html, fi) => {
        expanded.push({
          title: `${s.title || '推导'}：第 ${fi+1} 个公式的来源和用途`,
          formulas: [html],
          notes: ['这一小步从原专题中拆出来单独显示，避免多个关键式挤在一个卡片里看起来像公式索引。复习时按编号逐行抄写，而不是只背最后一行。'],
          exam: '能说明该式从哪里来、下一步要代入哪里。'
        });
      });
    });
    t.steps = expanded;
  }));

  window.EXPANDED_DATA = DATA;
})();
