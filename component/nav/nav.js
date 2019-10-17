function isEmpty(obj) {
  // null and undefined are "empty"
  if (obj == null) return true

  // Assume if it has a length property with a non-zero value
  // that that property is correct.
  if (obj.length > 0) return false
  if (obj.length === 0) return true

  // If it isn't an object at this point
  // it is empty, but it can't be anything *but* empty
  // Is it empty?  Depends on your application.
  if (typeof obj !== 'object') return true

  // Otherwise, does it have any properties of its own?
  // Note that this doesn't handle
  // toString and valueOf enumeration bugs in IE < 9
  for (var key in obj) {
    if (hasOwnProperty.call(obj, key)) return false
  }

  return true
}

let _navIndexLock = false
/**
 * 导航条 使用方法
 * - 按如下规则添加信息，组件会自动获取：
 * - - 在锚点元素class中加入"nav-target"，定义一个id
 * - - 在dataset中增加：data-label 导航文本，data-selectorId ID选择器（与上一步的id一致）
 */
Component({
  data: {
    isShowNav: false,
    currentIndex: 0,
    positionMap: {},
    navList: [],
  },
  lifetimes: {
    attached() {
      this._getAllAnchorInfo()
    },
  },
  methods: {
    bindClickNav(e) {
      const { index, selectorId } = e.target.dataset
      this.setData({ currentIndex: index })
      if (this.data.positionMap[selectorId] === undefined) {
        this._getAllAnchorPositionAndScroll(selectorId)
        return
      }
      wx.pageScrollTo({ scrollTop: this.data.positionMap[selectorId] })
      _navIndexLock = true
      setTimeout(() => _navIndexLock = false, 1000)
    },
    _getAllAnchorInfo() {
      wx.createSelectorQuery().selectAll('.nav-target').fields({
        dataset: true,
      }, (res) => {
        this.setData({
          navList: res.map(item => item.dataset).filter(Boolean)
        })
        this._getAllAnchorPositionAndScroll()   // 处理未加载完就滚动的情况，模块加载完需要重新计算Position
      }).exec()
    },
    _getAllAnchorPositionAndScroll(selectorIdToScroll) {
      const positionMap = this.data.positionMap
      wx.createSelectorQuery().selectAll('.nav-target').boundingClientRect(res => {
        if (!res || res.length === 0) return

        res.forEach(item => {
          const { top, dataset: { selectorId } } = item
          if (top >= 0) {
            positionMap[selectorId] = Math.max(top - 43, 0)
          }
        })

        if (selectorIdToScroll) {
          wx.pageScrollTo({ scrollTop: this.data.positionMap[selectorIdToScroll] })
        }
      }).exec()
    },
    updateNavInfo() {
      this._getAllAnchorInfo()
    },
    watchScroll(pageScrollObj) {
      if (isEmpty(this.data.positionMap)) {
        this._getAllAnchorPositionAndScroll()
        return
      }

      const pageScrollTop = pageScrollObj.scrollTop
      if (pageScrollTop < 275) {
        this.data.isShowNav && this.setData({ isShowNav: false })
      } else {
        !this.data.isShowNav && this.setData({ isShowNav: true })
      }

      // 当页面滚动时，停止更新navIndex
      if (_navIndexLock) {
        return
      }

      // 判断滚动的scrolltop，然后设置 currentIndex
      const lastIndex = this.data.navList.length - 1
      for (let idx = 0; idx <= lastIndex; idx++) {
        const navItem = this.data.navList[idx]
        const top = this.data.positionMap[navItem.selectorId]
        const indexToSet = idx === 0 ? idx : idx - 1

        if (top > pageScrollTop) {
          this.data.currentIndex !== indexToSet && this.setData({ currentIndex: indexToSet })
          break
        }

        // 到最后一个tab还没有break，说明已经滚动到了最后tab
        if (idx === lastIndex) {
          this.data.currentIndex !== lastIndex && this.setData({ currentIndex: lastIndex })
        }
      }
    },
  }
})
