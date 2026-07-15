(() => {
  'use strict';

  const ASSETS = [
    'BG_TUT_01','BG_TUT_02','BG_TUT_03',
    'CH_TUT_01','CH_TUT_02','CH_TUT_03','CH_TUT_04',
    'EN_TUT_01','EN_TUT_02','EN_TUT_03',
    'BOSS_TUT_01','BOSS_TUT_02',
    'FX_TUT_01','FX_TUT_02','FX_TUT_03','FX_TUT_04',
    'SFX_TUT_01','SFX_TUT_02','SFX_TUT_03'
  ];

  const COPY = {
    title: '无眼的祈祷',
    graveyard: '大坟地',
    graveyardSub: '生者的地狱，死者的天堂',
    seawall: '波防堤',
    seawallSub: '断生巨垣',
    ending: '你就是伊莉雅等待着的，承载一切的王啊。'
  };

  const SCENES = {
    awakening: [
      {asset:'BG_TUT_01', title:'大坟地', subtitle:'生者的地狱，死者的天堂', text:'风从黑色巨构的尽头吹来。尸骨在斗篷下碎裂，发出干涩的声响。你从死人堆中醒来，手边只剩一把沉重的黑铁剑——【碑】。'},
      {asset:'CH_TUT_02', title:'伊莉雅', text:'一双苍白的手覆上你的手背。她的双眼被黄金丝线缝死，身体布满细小裂纹；微弱的光，却让坟场的寒意退开了一点。'},
      {asset:'CH_TUT_02', title:'伊莉雅', text:'“您终于醒了，承王大人。”'},
      {asset:'CH_TUT_02', title:'伊莉雅', text:'“我是伊莉雅。外面很黑吧？没关系，牵着我的手。我会替您看着这个世界。”'}
    ],
    afterRusted: [
      {asset:'CH_TUT_02', title:'伊莉雅', text:'“它解脱了。非常温柔的一击呢。”她微微偏过头，仿佛在倾听风中的余音。'}
    ],
    afterGuard: [
      {asset:'CH_TUT_02', title:'伊莉雅', text:'“有些震手，对吗？没关系的，下一次，您可以试着再慢半拍……”'}
    ],
    afterFeint: [
      {asset:'CH_TUT_02', title:'伊莉雅', text:'“只要待在您的身边……伊莉雅就觉得，这个世界似乎也没那么可怕了。”'}
    ],
    seawall: [
      {asset:'BG_TUT_02', title:'波防堤', subtitle:'断生巨垣', text:'大坟地在这里断绝。纯黑巨墙贯入天穹，人站在它脚下，甚至算不上一粒尘埃。'},
      {asset:'CH_TUT_03', title:'伊莉雅', text:'“越过这里，就是死者们也无法触及的地方了。承王大人……无论发生什么，请您一定要活下去。”'},
      {asset:'FX_TUT_01', title:'天空折叠', text:'没有任何预兆，巨垣上方的天空被平整地折起。风声、脚步声、心跳声——一切声音同时消失。'},
      {asset:'BOSS_TUT_01', title:'？？？', text:'遮蔽半个天空的女人脸庞沉入这片空间。黑色死刑石板锁住她的脖颈；她没有恶意，只有俯瞰众生般的悲悯。苍白巨手缓缓垂下。'},
      {asset:'CH_TUT_04', title:'伊莉雅', text:'伊莉雅没有尖叫，也没有逃跑。她转过身，用单薄的身体抱住你。“请闭上眼睛，承王大人。不要看……”'},
      {asset:'SFX_TUT_02', title:'碎裂', text:'苍白手指拂过地面。怀中的温度发出一声清脆的“咔嚓”，随即化作满地白色粉末。'},
      {asset:'SFX_TUT_03', title:'金色眼珠', text:'一颗淡金色眼珠混着血丝，在冰冷地面上孤独地滚落。那个让你安心的声音，永远消失了。'}
    ],
    downed: [
      {asset:'FX_TUT_02', title:'金色接引', text:'巨手扫过坟地，碎石与气浪耗尽了你的体力。暗金色接引光柱轰然降下，试图回收伊莉雅留在世间的最后一点痕迹。'}
    ],
    eye: [
      {asset:'FX_TUT_03', title:'抢夺', text:'黑铁剑碑脱手而出，砸向接引光柱。右臂的生物铠甲暴走，漆黑荆棘撕裂袖管，将金色眼珠吞没并绞紧在小臂之上。'},
      {asset:'BOSS_TUT_02', title:'维度锚点丢失', text:'虚空爆发轰鸣。猩红锁链扣住黑色石板，将巨神拖回裂缝深处。天空愈合，大坟地再次陷入死寂。'},
      {asset:'FX_TUT_04', title:'伊莉雅之眼', subtitle:'全视遗物', text:'伊莉雅以为闭上眼睛，就能在这个冰冷的世界里活下来。现在，你看得清所有敌人的恶意，她却不见了。'},
      {asset:'FX_TUT_04', title:'看清', text:'手背上的金眸第一次睁开。几万米高的墙壁上，随之亮起无数双隐秘而充满恶意的符文眼睛。一切杀意都化作精确的数值与红线。'}
    ],
    ending: [
      {asset:'BG_TUT_03', title:'无眼的祈祷', subtitle:'序章终', text:'你就是伊莉雅等待着的，承载一切的王啊。'}
    ]
  };

  const TEXT = [
    COPY.title, COPY.graveyard, COPY.graveyardSub, COPY.seawall, COPY.seawallSub,
    '？？？', '承王', '碑', '伊莉雅', '锈蚀的死者', '残缺的死者',
    '不可伤害', '伊莉雅之眼', '全视遗物', '掘墓人·柯尔宁',
    '挥砍', '架势', '重击', '投掷', COPY.ending,
    ...Object.values(SCENES).flat().map(scene => `${scene.title}\n${scene.text}`)
  ];

  const ui = {
    frame: document.getElementById('gameFrame'),
    registry: document.getElementById('assetRegistry'),
    locationTitle: document.getElementById('locationTitle'),
    locationSubtitle: document.getElementById('locationSubtitle'),
    objective: document.getElementById('objective'),
    guide: document.getElementById('guideCaption'),
    guideSpeaker: document.getElementById('guideSpeaker'),
    guideText: document.getElementById('guideText'),
    overlay: document.getElementById('storyOverlay'),
    backdrop: document.getElementById('sceneBackdrop'),
    character: document.getElementById('sceneCharacter'),
    storyTitle: document.getElementById('storyTitle'),
    storySubtitle: document.getElementById('storySubtitle'),
    storyText: document.getElementById('storyText'),
    next: document.getElementById('storyNext'),
    skip: document.getElementById('storySkip')
  };

  const api = window.tutorial = {
    ready: false,
    TEXT,
    ASSETS,
    state: {stage:'boot', story:[], storyDone:null, frozen:false, survivalRounds:0, coach:null, pending:null, coached:new Set()},
    debugGoto: stage => goto(stage, true)
  };

  let g, d;
  let guideTimer = 0;
  // 主页面与 iframe 的 performance 时钟原点不同：涉及游戏时间线一律用 iframe 的钟
  const iNow = () => d.defaultView.performance.now();

  function registerAssets(){
    for(const id of ASSETS){
      const el = document.createElement('span');
      el.dataset.asset = id;
      el.textContent = id;
      ui.registry.appendChild(el);
    }
  }

  function assetSlot(id){
    ui.backdrop.dataset.asset = id || '';
    ui.backdrop.textContent = id ? `[美术占位 ${id}]` : '';
    ui.character.dataset.asset = id || '';
    ui.character.textContent = id ? id : '';
  }

  function showGuide(speaker, text, hold=4200){
    if(api.state.coach){ api.state.guideAfterCoach = {speaker, text, hold}; return; }   // 教练在场时延后，避免两个底部框重叠
    clearTimeout(guideTimer);
    ui.guideSpeaker.textContent = speaker;
    ui.guideText.textContent = text;
    ui.guide.classList.remove('hidden');
    guideTimer = setTimeout(() => ui.guide.classList.add('hidden'), hold);
  }

  function coachElement(target){
    if(target === 'dodge') return d.getElementById('btnMove');
    if(target === 'observe') return d.getElementById('tutorialCoachContinue');
    const index = g.CardSystem.hand.indexOf(target);
    return index < 0 ? null : d.querySelectorAll('#hand .card')[index];
  }

  let spotTimer = 0;
  function positionSpotlight(){
    const maskEl = d.getElementById('tutorialCoachMask');
    if(!api.state.coach || !maskEl || !maskEl.classList.contains('show')) return;
    const W = d.documentElement.clientWidth, H = d.documentElement.clientHeight;
    const ring = d.getElementById('tcRing');
    const set = (id, css) => { d.getElementById(id).style.cssText = css; };
    const target = api.state.coach.target === 'observe' ? null : coachElement(api.state.coach.target);
    if(!target){
      set('tcTop', `left:0;top:0;width:${W}px;height:${H}px`);
      set('tcBottom', 'width:0;height:0'); set('tcLeft', 'width:0;height:0'); set('tcRight', 'width:0;height:0');
      ring.style.display = 'none';
      return;
    }
    const r = target.getBoundingClientRect(), pad = 10;
    const x1 = Math.max(0, r.left - pad), y1 = Math.max(0, r.top - pad);
    const x2 = Math.min(W, r.right + pad), y2 = Math.min(H, r.bottom + pad);
    set('tcTop', `left:0;top:0;width:${W}px;height:${y1}px`);
    set('tcBottom', `left:0;top:${y2}px;width:${W}px;height:${Math.max(0, H - y2)}px`);
    set('tcLeft', `left:0;top:${y1}px;width:${x1}px;height:${y2 - y1}px`);
    set('tcRight', `left:${x2}px;top:${y1}px;width:${Math.max(0, W - x2)}px;height:${y2 - y1}px`);
    ring.style.display = 'block';
    ring.style.left = x1 + 'px'; ring.style.top = y1 + 'px';
    ring.style.width = (x2 - x1) + 'px'; ring.style.height = (y2 - y1) + 'px';
  }

  function refreshCoachTarget(){
    d.querySelectorAll('.tutorialCoachTarget').forEach(el => el.classList.remove('tutorialCoachTarget'));
    if(!api.state.coach) return;
    const target = coachElement(api.state.coach.target);
    if(target && api.state.coach.target !== 'observe') target.classList.add('tutorialCoachTarget');
    positionSpotlight();
    clearInterval(spotTimer);
    spotTimer = setInterval(positionSpotlight, 150);   // 手牌重绘/布局变化时跟随
  }

  function activateCoach(lesson, target, message){
    api.state.frozen = true;
    api.state.freezeAt = iNow();
    api.state.coach = {lesson, target, message};
    if(g.Battle.phase === 'play') g.Battle.stopPlayerClock();
    clearTimeout(guideTimer);
    ui.guide.classList.add('hidden');   // 教练开口时收起底部字幕，同一时刻只有一个对话框
    d.getElementById('tutorialCoachText').textContent = message;
    d.getElementById('tutorialCoachMask').classList.add('show');
    d.getElementById('tutorialCoachContinue').hidden = target !== 'observe';
    refreshCoachTarget();
  }

  function showCoach(lesson, target, message, perfectKind){
    if(api.state.coached.has(lesson)) return;
    const seg = g.Telegraph.seg && g.Telegraph.seg();
    if(perfectKind && seg && g.Telegraph.running){
      // 不再瞬移读条：挂起教学，让前摇自然播放，tick 抵达完美窗口的那一帧再冻结
      api.state.pending = {lesson, target, message, perfectKind, seg};
      return;
    }
    activateCoach(lesson, target, message);
  }

  function clearCoach(complete=true, resume=true){
    const coach = api.state.coach;
    if(!coach) return;
    if(complete) api.state.coached.add(coach.lesson);
    const paused = iNow() - api.state.freezeAt;
    if(g.Telegraph.running) g.Telegraph.segStart += paused;
    api.state.coach = null;
    api.state.frozen = false;
    d.getElementById('tutorialCoachMask').classList.remove('show');
    d.querySelectorAll('.tutorialCoachTarget').forEach(el => el.classList.remove('tutorialCoachTarget'));
    clearInterval(spotTimer);
    if(resume && g.Battle.phase === 'play') g.Battle.startPlayerClock();
    const queued = api.state.guideAfterCoach;
    if(queued){ api.state.guideAfterCoach = null; showGuide(queued.speaker, queued.text, queued.hold); }
  }

  function installCoachUI(){
    const style = d.createElement('style');
    style.textContent = `
      #tutorialCoachMask{display:none;position:fixed;inset:0;z-index:9000;pointer-events:none;opacity:0;transition:opacity .25s}
      #tutorialCoachMask.show{display:block;opacity:1}
      .tcPanel{position:fixed;background:rgba(5,4,7,.72)}
      #tcRing{position:fixed;border:3px solid #e2bd55;border-radius:9px;pointer-events:none;
              box-shadow:0 0 14px #e2bd55,0 0 40px rgba(201,165,74,.55);
              animation:tutorialPulse .8s ease-in-out infinite alternate}
      @keyframes tutorialPulse{to{box-shadow:0 0 22px #e2bd55,0 0 62px rgba(201,165,74,.85)}}
      #tutorialCoachBubble{position:fixed;z-index:9003;left:50%;bottom:18px;transform:translateX(-50%);
              width:min(900px,calc(100% - 80px));padding:13px 18px;background:rgba(24,20,28,.96);
              border-left:3px solid #c9a54a;box-shadow:0 5px 24px #000;color:#eee5d7;font-size:13px;text-align:left}
      #tutorialCoachBubble b{color:#c9a54a;margin-right:14px;letter-spacing:2px}
      #tutorialCoachContinue{pointer-events:auto;margin-left:14px}
      .tutorialCoachTarget{cursor:pointer}`;
    d.head.appendChild(style);
    const mask = d.createElement('div');
    mask.id = 'tutorialCoachMask';
    mask.innerHTML = '<div class="tcPanel" id="tcTop"></div><div class="tcPanel" id="tcBottom"></div>'
      + '<div class="tcPanel" id="tcLeft"></div><div class="tcPanel" id="tcRight"></div><div id="tcRing"></div>'
      + '<div id="tutorialCoachBubble"><b>伊莉雅</b><span id="tutorialCoachText"></span><button id="tutorialCoachContinue" hidden>继续观察</button></div>';
    d.body.appendChild(mask);
    d.defaultView.addEventListener('resize', positionSpotlight);
    d.getElementById('tutorialCoachContinue').addEventListener('click', () => clearCoach(true, true));
    d.addEventListener('click', event => {
      if(!api.state.coach) return;
      const target = coachElement(api.state.coach.target);
      if(target && (target === event.target || target.contains(event.target))) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      g.UI.hint('教学时停：请使用高亮的操作');
    }, true);
  }

  function playStory(name, done){
    api.state.story = (SCENES[name] || []).slice();
    api.state.storyDone = done || null;
    ui.skip.hidden = false;
    ui.overlay.classList.remove('hidden');
    renderStory();
  }

  function renderStory(){
    const scene = api.state.story[0];
    if(!scene){
      ui.overlay.classList.add('hidden');
      ui.skip.hidden = true;
      const done = api.state.storyDone;
      api.state.storyDone = null;
      if(done) done();
      return;
    }
    assetSlot(scene.asset);
    ui.storyTitle.textContent = scene.title;
    ui.storySubtitle.textContent = scene.subtitle || '';
    ui.storyText.textContent = scene.text;
    ui.next.textContent = api.state.story.length === 1 ? '继续' : '下一段';
    playSceneSound(scene.asset);
  }

  function unlockAudio(){
    if(g && g.Sfx && g.Sfx.unlock) g.Sfx.unlock();
  }

  function playSceneSound(asset){
    if(!g || !g.Sfx || !g.Sfx.ctx) return;
    if(asset === 'SFX_TUT_02') g.Sfx.glass();
    else if(asset === 'SFX_TUT_03') g.Sfx.tone(760,.45,'triangle',.055,-420);
    else if(asset === 'FX_TUT_01') g.Sfx.tone(54,.7,'sine',.11,-18);
    else if(asset === 'BOSS_TUT_01' || asset === 'BOSS_TUT_02') g.Sfx.crack();
    else if(asset && asset.startsWith('FX_TUT_')) g.Sfx.telegraph();
  }

  function nextStory(){ api.state.story.shift(); renderStory(); }
  function skipStory(){ api.state.story.length = 0; renderStory(); }

  function setLocation(name, sub){
    ui.locationTitle.textContent = name;
    ui.locationSubtitle.textContent = sub || '';
  }

  function setObjective(text){ ui.objective.textContent = text; }

  function hasEye(on){
    if(on){
      g.Run.relics = ['eye'];
      g.Run.equippedRelics = ['eye'];
      g.CONFIG.relics.eye.name = '伊莉雅之眼';
      g.CONFIG.relics.eye.desc = '显示敌人的准确招式与伤害。全视遗物，占用一个装备槽。';
    }else{
      g.Run.relics = [];
      g.Run.equippedRelics = [];
    }
    d.getElementById('timingWrap').style.visibility = 'visible';
  }

  function beginBattle(key, deck, eye=false){
    g.Pause.close && g.Pause.close();
    hasEye(eye);
    g.Run.hp = g.Run.maxHp;
    g.Run.deck = deck.slice();
    d.getElementById('enemyHpBar').style.display = key === 'tutGoddess' || key === 'tutLight' ? 'none' : '';
    g.Battle.begin(key, 0);
    d.getElementById('screen-battle').classList.add('active');
  }

  function goto(stage, debug=false){
    if(api.state.coach) clearCoach(false, false);
    api.state.stage = stage;
    api.state.frozen = false;
    api.state.pending = null;
    clearTimeout(guideTimer);
    ui.guide.classList.add('hidden');
    ui.overlay.classList.add('hidden');
    ui.skip.hidden = true;
    if(stage === 'rusted'){
      setLocation(COPY.graveyard, COPY.graveyardSub);
      setObjective('主动出牌：点击【挥砍】，赐予死者安息');
      beginBattle('tutRusted', ['slash','slash','slash','slash','slash']);
      showCoach('active-slash', 'slash', '点击高亮的【挥砍】。教学期间，行动时间已经停止。');
      showGuide('伊莉雅', '承王大人，您握得动身旁那块【碑】吗？请……赐予它安息吧。', 7000);
    }else if(stage === 'guard'){
      api.state.guardPrompted = false;
      setObjective('敌方正在攻击：保留并点击【架势】进行招架');
      beginBattle('tutGuard', ['focus','slash','focus','slash','slash']);
      showGuide('伊莉雅', '它要挥下斧头了。左边。', 7000);
    }else if(stage === 'feint'){
      setObjective('不要被假动作骗取精力；确认真前摇后再反应');
      beginBattle('tutFeint', ['focus','heavy','focus','heavy','slash']);
      showGuide('伊莉雅', '那是虚假的杀意，请不要被它骗了。', 7000);
    }else if(stage === 'goddess'){
      setLocation(COPY.seawall, COPY.seawallSub);
      setObjective('生存目标：撑过三轮 · ？？？【不可伤害】');
      api.state.survivalRounds = 0;
      beginBattle('tutGoddess', ['focus','focus','slash','focus','slash']);
    }else if(stage === 'cast'){
      setObjective('神要夺走她的眼睛：用临时牌【投掷】打断接引光柱');
      beginBattle('tutLight', ['throw','throw','throw','throw','throw']);
    }else if(stage === 'final'){
      setLocation(COPY.graveyard, COPY.graveyardSub);
      setObjective('【伊莉雅之眼】已装备：以承王之名，斩碎掘墓人·柯尔宁');
      beginBattle('tutDying', ['heavy','slash','focus','slash','heavy'], true);
      showGuide('？？？', '它曾埋葬了整片大坟地的死者。现在，它想埋葬你。', 6000);
    }
    if(debug) return true;
  }

  function installTutorialData(){
    const R=(dur,dmg)=>({kind:'real',dur,dmg});
    const F=dur=>({kind:'fake',dur});
    const G=dur=>({kind:'gap',dur});
    const CA=dur=>({kind:'cast',dur});

    Object.assign(g.CONFIG.cards, {
      slash: {...g.CONFIG.cards.slash, name:'挥砍', desc:'主动：造成 6 点伤害'},
      focus: {...g.CONFIG.cards.focus, name:'架势', desc:'主动：获得 8 护盾\n反应：招架可弹反'},
      heavy: {...g.CONFIG.cards.heavy, name:'重击', desc:'蓝色战技：造成 14 点伤害'},
      throw: {name:'投掷', cost:0, type:'attack', dmg:1, desc:'剧情牌：打断金色接引光柱'}
    });

    Object.assign(g.CONFIG.enemies, {
      tutRusted:{name:'锈蚀的死者',hp:18,posture:8,speed:8,moves:{drag:{name:'拖刃',segs:[R(1800,4)]}},patterns:[['drag']]},
      tutGuard:{name:'残缺的死者',hp:22,posture:10,speed:14,moves:{axe:{name:'生锈斧击',segs:[R(2600,6)]}},patterns:[['axe']]},
      tutFeint:{name:'残缺的死者',hp:26,posture:12,speed:14,moves:{feint:{name:'虚假杀意',segs:[F(850),G(420),R(1100,7)]}},patterns:[['feint']]},
      tutGoddess:{name:'？？？',hp:9999,posture:9999,speed:20,boss:true,moves:{
        finger:{name:'悲悯一指',red:true,segs:[R(1800,8)]},
        sweep:{name:'巨手横扫',red:true,segs:[R(1200,5),R(900,5)]},
        wave:{name:'碎界气浪',segs:[F(500),G(300),R(1000,7)]}
      },patterns:[['finger'],['sweep'],['wave']]},
      tutLight:{name:'？？？',hp:9999,posture:9999,speed:20,boss:true,moves:{guidance:{name:'金色接引',cast:true,segs:[CA(3000)],effect:{shield:[0,0]}}},patterns:[['guidance']]},
      tutDying:{name:'掘墓人·柯尔宁',hp:55,posture:20,speed:9,boss:true,moves:{
        heavy:{name:'重击',segs:[R(2100,15)]},
        sweep:{name:'掘墓横扫',red:true,segs:[R(1600,10)]},
        gather:{name:'收殓自愈',cast:true,segs:[CA(2200)],effect:{heal:[8,4]}}
      },patterns:[['heavy'],['sweep'],['gather'],['heavy']]}
    });
  }

  function installHooks(){
    const originalIntent = g.Battle.intentLabel.bind(g.Battle);
    g.Battle.intentLabel = function(move){ return this.hasEye() ? originalIntent(move) : '?'; };

    const originalPauseIntel = g.UI.renderPauseIntel.bind(g.UI);
    g.UI.renderPauseIntel = function(){
      originalPauseIntel();
      if(api.state.stage === 'goddess' || api.state.stage === 'cast'){
        this.el('pauseEnemyInfo').innerHTML = '<b>？？？</b><br>状态：不可伤害<br>识别：无法理解的远古神祇';
      }
    };

    const originalSetSegLabel = g.UI.setSegLabel.bind(g.UI);
    g.UI.setSegLabel = function(move, seg){
      if(!g.Battle.hasEye()) this.setIntent('?');
      else originalSetSegLabel(move, seg);
      if(api.state.stage === 'guard' && seg.kind === 'real' && !api.state.guardPrompted){
        api.state.guardPrompted = true;
        showCoach('first-parry', 'focus', '点击高亮的【架势】。此刻已锁定在完美弹反窗口。', 'block');
      }
      if(api.state.stage === 'feint'){
        if(seg.kind === 'fake') showCoach('first-feint', 'observe', '这是佯攻。不要浪费精力；确认后继续观察。');
        if(seg.kind === 'real') showCoach('feint-real', 'focus', '杀意成真。现在用【架势】完美弹反。', 'block');
      }
      if(api.state.stage === 'goddess' && seg.kind === 'real' && seg.red)
        showCoach('first-red-dodge', 'dodge', '红光攻击无法弹反。点击高亮的【闪避】。', 'move');
      if(api.state.stage === 'cast' && seg.kind === 'cast')
        showCoach('first-interrupt', 'throw', '整段吟唱都可打断。点击【投掷】，夺回伊莉雅的眼睛。', 'interrupt');
    };

    // 教学关全程无限时（主人拍板）：出牌行动钟禁用，时间条隐藏
    g.Battle.startPlayerClock = function(){ this.stopPlayerClock(); };
    const clockEl = d.getElementById('turnClock');
    if(clockEl) clockEl.style.display = 'none';

    const originalTick = g.Telegraph.tick.bind(g.Telegraph);
    g.Telegraph.tick = function(){
      const pc = api.state.pending;
      if(pc && !api.state.frozen && this.running){
        const seg = this.seg && this.seg();
        if(seg !== pc.seg){ api.state.pending = null; }
        else {
          const el = iNow() - this.segStart;
          const win = g.Battle.perfectWindowMs(seg.dur, pc.perfectKind);
          if(el >= seg.dur - win + 40){   // 进窗 40ms 再停：吸收帧间隔，保证点击必定完美
            api.state.pending = null;
            activateCoach(pc.lesson, pc.target, pc.message);
          }
        }
      }
      if(api.state.frozen){ this.raf = requestAnimationFrame(() => this.tick()); return; }
      originalTick();
    };

    const originalInput = g.Telegraph.input.bind(g.Telegraph);
    g.Telegraph.input = function(kind){
      if(api.state.pending){ api.state.coached.add(api.state.pending.lesson); api.state.pending = null; }
      if(api.state.frozen){
        if(api.state.coach?.target === 'dodge' && kind === 'move') clearCoach(true, true);
        else { g.UI.hint('教学时停：请使用高亮的操作'); return; }
      }
      originalInput(kind);
    };

    const originalReact = g.Battle.reactWithCard.bind(g.Battle);
    g.Battle.reactWithCard = function(i){
      if(api.state.pending){ api.state.coached.add(api.state.pending.lesson); api.state.pending = null; }
      const id = g.CardSystem.hand[i];
      const stage = api.state.stage;
      if(api.state.coach && api.state.coach.target !== id) return;
      if(api.state.coach?.target === id) clearCoach(true, true);
      originalReact(i);
      if(stage === 'guard' && id === 'focus') showGuide('伊莉雅', '很好。以后真正的战斗不会替您停住时间。');
      if(stage === 'cast' && id === 'throw'){
        g.Telegraph.stop();
        g.Battle.phase = 'over';
        setTimeout(() => playStory('eye', () => goto('final')), 250);
      }
    };

    const originalPlay = g.Battle.playCard.bind(g.Battle);
    g.Battle.playCard = function(i){
      const id = g.CardSystem.hand[i];
      if(api.state.coach && api.state.coach.target !== id) return;
      if(api.state.coach?.target === id) clearCoach(true, true);
      const protectedBoss = api.state.stage === 'goddess';
      const hp = this.enemy && this.enemy.hp;
      originalPlay(i);
      if(protectedBoss && this.enemy){
        this.enemy.hp = hp;
        g.UI.hint('不可伤害：你的攻击无法触及这尊神明');
        g.UI.render();
      }
      // 核心课程演示完成前，本阶段敌人保底 1 血（防止机制没教完敌人就死）
      const gateLesson = {guard:'first-parry', feint:'feint-real'}[api.state.stage];
      if(gateLesson && !api.state.coached.has(gateLesson) && this.enemy && this.enemy.hp <= 0){
        this.enemy.hp = 1;
        g.UI.hint('它还站着——先完成伊莉雅教你的动作');
        g.UI.render();
      }
    };

    const originalFinishRound = g.Battle.finishRound.bind(g.Battle);
    g.Battle.finishRound = function(){
      if(api.state.stage === 'goddess'){
        api.state.survivalRounds++;
        setObjective(`生存目标：撑过三轮（${api.state.survivalRounds}/3） · ？？？【不可伤害】`);
        if(api.state.survivalRounds >= 3){
          this.phase = 'over';
          this.stopPlayerClock();
          g.Telegraph.stop();
          this.player.hp = 0;
          g.UI.render();
          setTimeout(() => playStory('downed', () => goto('cast')), 300);
          return;
        }
      }
      originalFinishRound();
    };

    g.Run.afterBattleWin = function(){
      const stage = api.state.stage;
      if(stage === 'rusted') playStory('afterRusted', () => goto('guard'));
      else if(stage === 'guard') playStory('afterGuard', () => goto('feint'));
      else if(stage === 'feint') playStory('afterFeint', () => playStory('seawall', () => goto('goddess')));
      else if(stage === 'final') playStory('ending');
    };
  }

  function boot(){
    g = ui.frame.contentWindow.game;
    d = ui.frame.contentDocument;
    if(!g){ setTimeout(boot, 20); return; }
    g.Run.start();
    d.getElementById('overlay').classList.add('hidden');
    installTutorialData();
    installCoachUI();
    installHooks();
    setLocation(COPY.graveyard, COPY.graveyardSub);
    setObjective('苏醒');
    api.ready = true;
    playStory('awakening', () => goto('rusted'));
  }

  registerAssets();
  document.addEventListener('pointerdown', unlockAudio, {capture:true});
  ui.next.addEventListener('click', () => { unlockAudio(); nextStory(); });
  ui.skip.addEventListener('click', () => { unlockAudio(); skipStory(); });
  if(ui.frame.contentWindow && ui.frame.contentWindow.game) boot();
  else ui.frame.addEventListener('load', boot, {once:true});
})();
