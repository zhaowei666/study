var that;

class Tab {
    constructor(id) {
        //初始化获取所有元素
        that = this
        this.main = document.querySelector(id)
        this.add = this.main.querySelector('.tabadd')
        this.tabscon = this.main.querySelector('.tabscon');
        that.ul = this.main.querySelector('.fisrstnav ul');
        this.init();
    }

    init() {
        this.getAllNode();
        this.add.onclick = this.addTab;
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.selectTab;
            this.delIcon[i].onclick = this.delTab;
        }
    }

    selectTab() {
        that.clearClass();
        this.className = 'liactive';
        that.sections[this.index].className = 'conactive';
    }

    addTab() {
        that.clearClass();
        var rand = Math.random();
        var str = '<li class="liactive"><span>新标签也</span><span class="iconfont icon-guanbi"></span></li>'
        that.ul.insertAdjacentHTML('beforeend', str);
        var section = '<section class="conactive">'+ rand +'</section>';
        that.tabscon.insertAdjacentHTML('beforeend', section);
        that.init();
    }

    delTab(e) {
        e.stopPropagation();
        var index = this.parentNode.index;
        this.parentNode.remove();
        that.sections[index].remove();
        //诉案中删除的前一个tab
        index--
        that.init();
        if (!this.parentNode.className) return;
        that.lis[index] && that.lis[index].click();

    }

    editTab() {

    }
    clearClass(){
        for (var i = 0; i< that.lis.length; i++){
            that.lis[i].className = '';
            that.sections[i].className = '';
        }
    }

    getAllNode(){
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
        this.delIcon = this.main.querySelectorAll('.icon-guanbi');
    }
}

new Tab('#tab')