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

  // クリックイベント
  const handleClick = (e) => {
    e.preventDefault();
    const $this = e.target;
    //datesetはdata属性の値
    const targetVal = $this.dataset.nav;

    //対象のコンテンツをアクティブ化
    $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block'
  }

  //前nav要素に対して関数を適用、発火
  const navNum = $nav.length;     
  for (let i = 0; i < navNum; i++) {
    $nav[i].addEventListener('click', (e) => handleClick(e));
    // console.log($nav[0]);
  }

})();