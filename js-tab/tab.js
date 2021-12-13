// 即時関数
(()=>{
  const $doc = document;
  const $tab = $doc.getElementById('js-tab');
  // console.log($tab);
  const $nav = $tab.querySelectorAll('[data-nav]');
  const $content = $tab.querySelectorAll('[data-content]');
  // console.log('$content', $content);
  // 初期化（文字列表示）
  const init = () => {
    $content[0].style.display = 'block';
  };
  init();

})();