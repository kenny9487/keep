import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2, Circle, Plus, Minus, Trash2, Save, FolderOpen, X, Edit2, ChevronUp, ChevronDown, Check, Download, Upload, ChevronRight, ListPlus, Square, CheckSquare, MoveRight, ArrowUpDown } from 'lucide-react';

export default function App() {
  // 預設模板資料
  const initialTemplates = [
    [
  {
    "id": "t-1783877970485",
    "name": "✈️ 小琉球三天兩夜",
    "items": [
      {
        "id": "c-1783867515481",
        "isCategory": true,
        "name": "衣物沐浴",
        "isExpanded": false,
        "subItems": [
          {
            "id": "i-1783866479701",
            "name": "衣服",
            "quantity": 4,
            "checked": false
          },
          {
            "id": "i-1783866482002",
            "name": "褲子",
            "quantity": 4,
            "checked": false
          },
          {
            "id": "i-1783866486509",
            "name": "內褲",
            "quantity": 4,
            "checked": false
          },
          {
            "id": "i-1783866488942",
            "name": "內衣",
            "quantity": 4,
            "checked": false
          },
          {
            "id": "i-1783866491962",
            "name": "襪子",
            "quantity": 4,
            "checked": false
          },
          {
            "id": "i-1783866509067",
            "name": "浴巾",
            "quantity": 1,
            "checked": false
          },
          {
            "id": "i-1783866514370",
            "name": "毛巾",
            "quantity": 1,
            "checked": false
          },
          {
            "id": "i-1783866559425",
            "name": "洗面乳",
            "quantity": 1,
            "checked": false
          },
          {
            "id": "i-1783866565427",
            "name": "沐浴用品",
            "quantity": 1,
            "checked": false
          },
          {
            "id": "i-1783866570403",
            "name": "牙刷牙膏",
            "quantity": 1,
            "checked": false
          }
        ]
      },
      {
        "id": "c-1783867534086",
        "isCategory": true,
        "name": "電子產品",
        "isExpanded": false,
        "subItems": [
          {
            "id": "i-1783867541194",
            "name": "手機",
            "quantity": 1,
            "checked": false
          },
          {
            "id": "i-1783867544322",
            "name": "平板",
            "quantity": 1,
            "checked": false
          },
          {
            "id": "i-1783867548676",
            "name": "相機",
            "quantity": 1,
            "checked": false
          },
          {
            "id": "i-1783867552298",
            "name": "相機電池",
            "quantity": 3,
            "checked": false
          },
          {
            "id": "i-1783867560697",
            "name": "記憶卡",
            "quantity": 2,
            "checked": false
          },
          {
            "id": "i-1783867573391",
            "name": "記憶卡盒",
            "quantity": 1,
            "checked": false
          },
          {
            "id": "i-1783867585898",
            "name": "充電器",
            "quantity": 1,
            "checked": false
          },
          {
            "id": "i-1783867640030",
            "name": "Lighting 線",
            "quantity": 1,
            "checked": false
          },
          {
            "id": "i-1783867662320",
            "name": "type c 線",
            "quantity": 1,
            "checked": false
          },
          {
            "id": "i-1783867668224",
            "name": "手錶充電線",
            "quantity": 1,
            "checked": false
          },
          {
            "id": "i-1783867848107",
            "name": "長自拍棒",
            "quantity": 1,
            "checked": false
          },
          {
            "id": "i-1783867854480",
            "name": "短自拍棒",
            "quantity": 1,
            "checked": false
          },
          {
            "id": "i-1783867858198",
            "name": "防水殼",
            "quantity": 1,
            "checked": false
          }
        ]
      },
      {
        "id": "c-1783868460456",
        "isCategory": true,
        "name": "證件鑰匙",
        "isExpanded": false,
        "subItems": [
          {
            "id": "i-1783868469266",
            "name": "車鑰匙",
            "quantity": 1,
            "checked": false
          },
          {
            "id": "i-1783868473454",
            "name": "家鑰匙",
            "quantity": 1,
            "checked": false
          },
          {
            "id": "i-1783868477815",
            "name": "身分證",
            "quantity": 1,
            "checked": false
          },
          {
            "id": "i-1783868481134",
            "name": "健保卡",
            "quantity": 1,
            "checked": false
          },
          {
            "id": "i-1783868517585",
            "name": "錢包",
            "quantity": 1,
            "checked": false
          }
        ]
      },
      {
        "id": "c-1783877706196",
        "isCategory": true,
        "name": "餐具",
        "isExpanded": false,
        "subItems": [
          {
            "id": "i-1783877711139",
            "name": "保鮮盒",
            "quantity": 1,
            "checked": false
          },
          {
            "id": "i-1783877722346",
            "name": "餐具組",
            "quantity": 1,
            "checked": false
          },
          {
            "id": "i-1783877725901",
            "name": "水壺",
            "quantity": 1,
            "checked": false
          }
        ]
      },
      {
        "id": "c-1783877866825",
        "isCategory": true,
        "name": "衛生紙食物藥物",
        "isExpanded": false,
        "subItems": [
          {
            "id": "i-1783877833533",
            "name": "衛生紙",
            "quantity": 1,
            "checked": false
          },
          {
            "id": "i-1783877836263",
            "name": "濕紙巾",
            "quantity": 1,
            "checked": false
          },
          {
            "id": "i-1783877839126",
            "name": "泡麵",
            "quantity": 1,
            "checked": false
          },
          {
            "id": "i-1783877845216",
            "name": "暈船藥",
            "quantity": 1,
            "checked": false
          }
        ]
      },
      {
        "id": "c-1783877877541",
        "isCategory": true,
        "name": "裝備",
        "isExpanded": false,
        "subItems": [
          {
            "id": "i-1783877752629",
            "name": "泳衣",
            "quantity": 1,
            "checked": false
          },
          {
            "id": "i-1783877759737",
            "name": "泳褲",
            "quantity": 1,
            "checked": false
          },
          {
            "id": "i-1783877774324",
            "name": "水母衣",
            "quantity": 1,
            "checked": false
          },
          {
            "id": "i-1783877806398",
            "name": "面鏡",
            "quantity": 1,
            "checked": false
          },
          {
            "id": "i-1783877815262",
            "name": "呼吸管",
            "quantity": 1,
            "checked": false
          }
        ]
      }
    ]
  }
]

  // 狀態管理
  const [templates, setTemplates] = useState(initialTemplates);
  const [currentItems, setCurrentItems] = useState(initialTemplates[0].items);
  const [currentListName, setCurrentListName] = useState(initialTemplates[0].name);
  
  // 輸入框狀態
  const [newItemName, setNewItemName] = useState('');
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newItemQuantity, setNewItemQuantity] = useState(1);
  const [newTemplateName, setNewTemplateName] = useState('');
  
  // 編輯狀態
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editingParentId, setEditingParentId] = useState(null);
  
  // 批次整理與排序狀態
  const [isBatchMode, setIsBatchMode] = useState(false);
  const [isSortMode, setIsSortMode] = useState(false);
  const [batchSelectedIds, setBatchSelectedIds] = useState([]);
  const [showBatchTargetModal, setShowBatchTargetModal] = useState(false);

  // UI 狀態
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [showLoadModal, setShowLoadModal] = useState(false);
  const [notification, setNotification] = useState('');
  const fileInputRef = useRef(null);

  // 通知顯示邏輯
  const showNotification = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(''), 3000);
  };

  // 載入 localStorage 資料
  useEffect(() => {
    const savedTemplates = localStorage.getItem('checklistTemplates');
    if (savedTemplates) {
      try {
        const parsed = JSON.parse(savedTemplates);
        if (parsed.length > 0) {
          const normalizedTemplates = parsed.map(t => {
            const hasCategory = t.items.some(item => item.isCategory);
            if (!hasCategory && t.items.length > 0) {
              return {
                ...t,
                items: [{
                  id: `c-default-${t.id}`,
                  isCategory: true,
                  name: '未分類物品',
                  isExpanded: true,
                  subItems: t.items
                }]
              };
            }
            return t;
          });
          setTemplates(normalizedTemplates);
          setCurrentItems(normalizedTemplates[0].items);
          setCurrentListName(normalizedTemplates[0].name);
        }
      } catch (e) {
        console.error("無法解析儲存的模板", e);
      }
    }
  }, []);

  // 當模板變更時，儲存到 localStorage
  useEffect(() => {
    localStorage.setItem('checklistTemplates', JSON.stringify(templates));
  }, [templates]);

  // 切換項目勾選狀態
  const toggleCheck = (id, parentId = null) => {
    if (isBatchMode && !parentId) {
      toggleBatchSelect(id);
      return;
    }

    if (parentId) {
      setCurrentItems(currentItems.map(cat => 
        cat.id === parentId ? {
          ...cat,
          subItems: cat.subItems.map(sub => sub.id === id ? { ...sub, checked: !sub.checked } : sub)
        } : cat
      ));
    } else {
      setCurrentItems(currentItems.map(item => 
        item.id === id ? { ...item, checked: !item.checked } : item
      ));
    }
  };

  // 批次選取切換
  const toggleBatchSelect = (id) => {
    setBatchSelectedIds(prev => 
      prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]
    );
  };

  // 全選/取消全選獨立項目
  const handleSelectAll = () => {
    const independentItemIds = currentItems.filter(item => !item.isCategory).map(item => item.id);
    const isAllSelected = independentItemIds.length > 0 && independentItemIds.every(id => batchSelectedIds.includes(id));
    
    if (isAllSelected) {
      setBatchSelectedIds([]);
    } else {
      setBatchSelectedIds(independentItemIds);
    }
  };

  // 切換模式的輔助函數
  const toggleBatchMode = () => {
    setIsBatchMode(!isBatchMode);
    if (!isBatchMode) setIsSortMode(false);
    setBatchSelectedIds([]);
  };

  const toggleSortMode = () => {
    setIsSortMode(!isSortMode);
    if (!isSortMode) setIsBatchMode(false);
  };

  // 執行批次移動至分類
  const executeBatchMove = (targetCategoryId) => {
    const itemsToMove = currentItems.filter(item => batchSelectedIds.includes(item.id));
    setCurrentItems(prev => {
      const updatedItems = prev.map(item => {
        if (item.id === targetCategoryId) {
          return { ...item, subItems: [...item.subItems, ...itemsToMove], isExpanded: true };
        }
        return item;
      }).filter(item => !batchSelectedIds.includes(item.id));
      return updatedItems;
    });

    setBatchSelectedIds([]);
    setIsBatchMode(false);
    setShowBatchTargetModal(false);
    showNotification('已成功將物品移入分類！');
  };

  // 切換分類收合狀態
  const toggleCategory = (id) => {
    setCurrentItems(currentItems.map(item => 
      item.id === id && item.isCategory ? { ...item, isExpanded: !item.isExpanded } : item
    ));
  };

  // 調整項目數量
  const updateQuantity = (id, delta, parentId = null) => {
    if (parentId) {
      setCurrentItems(currentItems.map(cat => 
        cat.id === parentId ? {
          ...cat,
          subItems: cat.subItems.map(sub => 
            sub.id === id ? { ...sub, quantity: Math.max(1, sub.quantity + delta) } : sub
          )
        } : cat
      ));
    } else {
      setCurrentItems(currentItems.map(item => 
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      ));
    }
  };

  // 刪除項目或分類
  const deleteItem = (id, parentId = null) => {
    if (parentId) {
      setCurrentItems(currentItems.map(cat => 
        cat.id === parentId ? {
          ...cat,
          subItems: cat.subItems.filter(sub => sub.id !== id)
        } : cat
      ));
    } else {
      setCurrentItems(currentItems.filter(item => item.id !== id));
      if (batchSelectedIds.includes(id)) {
        setBatchSelectedIds(prev => prev.filter(itemId => itemId !== id));
      }
    }
  };

  // 新增獨立項目
  const handleAddItem = (e) => {
    e.preventDefault();
    if (!newItemName.trim()) return;
    
    const newItem = {
      id: `i-${Date.now()}`,
      name: newItemName.trim(),
      quantity: newItemQuantity,
      checked: false
    };
    
    setCurrentItems([...currentItems, newItem]);
    setNewItemName('');
    setNewItemQuantity(1);
  };

  // 新增分類
  const handleAddCategory = (e) => {
    e.preventDefault();
    if (!newCategoryName.trim()) return;
    
    const newCat = {
      id: `c-${Date.now()}`,
      isCategory: true,
      name: newCategoryName.trim(),
      isExpanded: true,
      subItems: []
    };
    
    setCurrentItems([...currentItems, newCat]);
    setNewCategoryName('');
  };

  // 啟動編輯模式
  const startEdit = (id, currentName, parentId = null) => {
    if (isBatchMode && !parentId) return;
    setEditingId(id);
    setEditName(currentName);
    setEditingParentId(parentId);
  };

  // 在分類內新增項目
  const handleAddSubItem = (parentId) => {
    const newItem = {
      id: `i-${Date.now()}`,
      name: '新物品',
      quantity: 1,
      checked: false
    };
    
    setCurrentItems(currentItems.map(cat => 
      cat.id === parentId ? {
        ...cat,
        subItems: [...cat.subItems, newItem],
        isExpanded: true
      } : cat
    ));
    setTimeout(() => startEdit(newItem.id, newItem.name, parentId), 50);
  };

  // 儲存編輯
  const saveEdit = (id, parentId = null) => {
    if (!editName.trim()) {
      setEditingId(null);
      setEditingParentId(null);
      return;
    }
    
    if (parentId) {
      setCurrentItems(currentItems.map(cat => 
        cat.id === parentId ? {
          ...cat,
          subItems: cat.subItems.map(sub => 
            sub.id === id ? { ...sub, name: editName.trim() } : sub
          )
        } : cat
      ));
    } else {
      setCurrentItems(currentItems.map(item => 
        item.id === id ? { ...item, name: editName.trim() } : item
      ));
    }
    setEditingId(null);
    setEditingParentId(null);
  };

  // 移動項目 (排序)
  const moveItem = (index, direction, parentId = null) => {
    if (parentId) {
      setCurrentItems(currentItems.map(cat => {
        if (cat.id === parentId) {
          if ((index === 0 && direction === -1) || (index === cat.subItems.length - 1 && direction === 1)) return cat;
          const newSubItems = [...cat.subItems];
          const temp = newSubItems[index];
          newSubItems[index] = newSubItems[index + direction];
          newSubItems[index + direction] = temp;
          return { ...cat, subItems: newSubItems };
        }
        return cat;
      }));
    } else {
      if ((index === 0 && direction === -1) || (index === currentItems.length - 1 && direction === 1)) return;
      const newItems = [...currentItems];
      const temp = newItems[index];
      newItems[index] = newItems[index + direction];
      newItems[index + direction] = temp;
      setCurrentItems(newItems);
    }
  };

  // 載入模板
  const loadTemplate = (template) => {
    const resetChecked = (items) => items.map(item => {
      if (item.isCategory) return { ...item, subItems: resetChecked(item.subItems) };
      return { ...item, checked: false };
    });
    
    setCurrentItems(resetChecked(template.items));
    setCurrentListName(template.name);
    setShowLoadModal(false);
    setIsBatchMode(false);
    setBatchSelectedIds([]);
  };

  // 儲存為新模板
  const saveAsTemplate = () => {
    if (!newTemplateName.trim()) return;
    
    const resetChecked = (items) => items.map(item => {
      if (item.isCategory) return { ...item, subItems: resetChecked(item.subItems) };
      return { ...item, checked: false };
    });
    
    const newTemplate = {
      id: `t-${Date.now()}`,
      name: newTemplateName.trim(),
      items: resetChecked(currentItems)
    };
    
    setTemplates([...templates, newTemplate]);
    setCurrentListName(newTemplate.name);
    setNewTemplateName('');
    setShowSaveModal(false);
  };

  // 刪除模板
  const deleteTemplate = (id) => {
    setTemplates(templates.filter(t => t.id !== id));
  };

  // 匯出模板
  const exportTemplates = () => {
    const dataStr = JSON.stringify(templates, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'checklist-templates.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showNotification('匯出成功！');
  };

  // 匯入模板
  const importTemplates = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const importedData = JSON.parse(event.target.result);
        if (Array.isArray(importedData)) {
          const newTemplates = importedData.map((t, i) => ({
            ...t,
            id: `t-${Date.now()}-${i}`,
          }));
          setTemplates(prev => [...prev, ...newTemplates]);
          showNotification('匯入成功！');
        } else {
          showNotification('匯入失敗：檔案格式不正確');
        }
      } catch (error) {
        showNotification('匯入失敗：檔案無法解析');
        console.error('Import error:', error);
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  // 計算進度
  let checkedCount = 0;
  let totalCount = 0;
  let independentItemCount = 0;
  let categoryCount = 0;

  currentItems.forEach(item => {
    if (item.isCategory) {
      categoryCount++;
      item.subItems.forEach(sub => {
        totalCount++;
        if (sub.checked) checkedCount++;
      });
    } else {
      independentItemCount++;
      totalCount++;
      if (item.checked) checkedCount++;
    }
  });
  const progressPercentage = totalCount === 0 ? 0 : Math.round((checkedCount / totalCount) * 100);
  const categories = currentItems.filter(item => item.isCategory);

  // 渲染單一項目
  const renderItem = (item, index, parentId = null) => {
    const isIndependent = !parentId;
    const isBatchSelected = isBatchMode && isIndependent && batchSelectedIds.includes(item.id);

    return (
      <div 
        key={item.id} 
        onClick={() => {
          if (isBatchMode && isIndependent) toggleBatchSelect(item.id);
        }}
        className={`flex items-center justify-between p-4 rounded-2xl transition-all duration-200 border ${
          isBatchSelected ? 'bg-blue-50 border-blue-300 shadow-md ring-2 ring-blue-100' :
          item.checked 
            ? 'bg-slate-50 border-slate-100 opacity-60' 
            : 'bg-white border-slate-200 shadow-sm hover:border-blue-200'
        } ${parentId ? 'mb-2' : 'mb-3'} ${isBatchMode && isIndependent ? 'cursor-pointer' : ''}`}
      >
        {/* 排序控制 (僅在排序模式開啟時顯示) */}
        {isSortMode && (
          <div className={`flex flex-col mr-3 ${item.checked ? 'opacity-30 pointer-events-none' : 'text-slate-400'}`}>
            <button 
              onClick={(e) => { e.stopPropagation(); moveItem(index, -1, parentId); }}
              className="p-1 hover:text-blue-600 hover:bg-blue-50 rounded disabled:opacity-30 transition-colors"
              title="向上移動"
            >
              <ChevronUp size={18} />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); moveItem(index, 1, parentId); }}
              className="p-1 hover:text-blue-600 hover:bg-blue-50 rounded disabled:opacity-30 transition-colors"
              title="向下移動"
            >
              <ChevronDown size={18} />
            </button>
          </div>
        )}

        {/* 勾選按鈕與名稱/編輯框 */}
        <div className="flex items-center flex-1 mr-4 overflow-hidden pointer-events-none sm:pointer-events-auto">
          {isBatchMode && isIndependent ? (
            <div className="mr-4 flex-shrink-0 text-blue-500">
              {isBatchSelected ? <CheckSquare size={26} /> : <Square size={26} className="text-slate-300" />}
            </div>
          ) : (
            <button 
              onClick={(e) => { e.stopPropagation(); toggleCheck(item.id, parentId); }}
              className="mr-4 flex-shrink-0"
            >
              {item.checked ? (
                <CheckCircle2 size={26} className="text-green-500" />
              ) : (
                <Circle size={26} className="text-slate-300" />
              )}
            </button>
          )}
          
          {editingId === item.id ? (
            <div className="flex items-center flex-1 min-w-0 gap-2 pointer-events-auto" onClick={e => e.stopPropagation()}>
              <input 
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                onBlur={() => saveEdit(item.id, parentId)}
                onKeyDown={(e) => e.key === 'Enter' && saveEdit(item.id, parentId)}
                className="flex-1 bg-slate-50 border border-slate-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoFocus
              />
              <button 
                onMouseDown={(e) => { e.preventDefault(); saveEdit(item.id, parentId); }}
                className="p-1.5 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                title="確認儲存"
              >
                <Check size={20} />
              </button>
            </div>
          ) : (
            <div className="flex items-center flex-1 min-w-0 group pointer-events-auto">
              <span className={`text-lg font-medium truncate transition-all ${item.checked && !isBatchMode ? 'line-through text-slate-400' : 'text-slate-700'}`}>
                {item.name}
              </span>
              {!item.checked && (!isBatchMode || !isIndependent) && (
                <button 
                  onClick={(e) => { e.stopPropagation(); startEdit(item.id, item.name, parentId); }}
                  className="ml-2 p-1.5 text-slate-400 opacity-0 group-hover:opacity-100 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                  title="修改名稱"
                >
                  <Edit2 size={16} />
                </button>
              )}
            </div>
          )}
        </div>

        {/* 數量控制與刪除 */}
        <div className={`flex items-center gap-3 flex-shrink-0 ${isBatchMode && isIndependent ? 'opacity-30 pointer-events-none' : ''}`}>
          <div className={`flex items-center bg-slate-100 rounded-lg p-1 ${(item.checked && !isBatchMode) ? 'pointer-events-none' : ''}`}>
            <button 
              onClick={(e) => { e.stopPropagation(); updateQuantity(item.id, -1, parentId); }}
              className="p-1 text-slate-500 hover:text-slate-800 hover:bg-slate-200 rounded-md transition-colors"
              disabled={item.quantity <= 1}
            >
              <Minus size={16} />
            </button>
            <span className="w-8 text-center font-semibold text-slate-700">
              {item.quantity}
            </span>
            <button 
              onClick={(e) => { e.stopPropagation(); updateQuantity(item.id, 1, parentId); }}
              className="p-1 text-slate-500 hover:text-slate-800 hover:bg-slate-200 rounded-md transition-colors"
            >
              <Plus size={16} />
            </button>
          </div>
          <button 
            onClick={(e) => { e.stopPropagation(); deleteItem(item.id, parentId); }}
            className="p-2 text-red-400 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors"
          >
            <Trash2 size={20} />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-800 font-sans ${isBatchMode ? 'pb-24' : 'pb-20'}`}>
      {/* 通知提示 */}
      {notification && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-6 py-3 rounded-full shadow-lg z-50 transition-all duration-300">
          {notification}
        </div>
      )}

      {/* 批次操作浮動列 */}
      {isBatchMode && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] p-4 z-40 slide-up-animation">
          <div className="max-w-2xl mx-auto flex items-center justify-between px-2">
            <div className="flex items-center gap-3">
              <button 
                onClick={handleSelectAll}
                className="flex items-center gap-1.5 text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-2 py-1.5 rounded-lg transition-colors font-medium text-sm"
              >
                {currentItems.filter(item => !item.isCategory).every(item => batchSelectedIds.includes(item.id)) && currentItems.filter(item => !item.isCategory).length > 0 ? (
                  <><CheckSquare size={18} /> 取消全選</>
                ) : (
                  <><Square size={18} /> 全選</>
                )}
              </button>
              <div className="h-4 w-px bg-slate-300 hidden sm:block"></div>
              <span className="bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-full text-sm">
                已選 {batchSelectedIds.length} 項
              </span>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={toggleBatchMode} 
                className="px-4 py-2 bg-slate-100 text-slate-600 rounded-xl hover:bg-slate-200 transition-colors font-medium"
              >
                取消
              </button>
              <button 
                onClick={() => setShowBatchTargetModal(true)}
                disabled={batchSelectedIds.length === 0} 
                className="px-4 py-2 bg-blue-600 text-white rounded-xl disabled:opacity-50 hover:bg-blue-700 transition-colors font-medium flex items-center gap-2"
              >
                <MoveRight size={18} />
                移至分類
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 頂部導航列 */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-slate-900 truncate flex-1">
            {currentListName}
          </h1>
          <div className="flex gap-2 ml-4">
            <button 
              onClick={() => setShowLoadModal(true)}
              className="p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors flex items-center justify-center"
              title="載入模板"
            >
              <FolderOpen size={20} />
            </button>
            <button 
              onClick={() => {
                setNewTemplateName(currentListName);
                setShowSaveModal(true);
              }}
              className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors flex items-center justify-center"
              title="儲存為模板"
            >
              <Save size={20} />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6">
        {/* 進度條 */}
        <div className="bg-white rounded-2xl p-4 shadow-sm mb-6 border border-slate-100">
          <div className="flex justify-between items-end mb-2">
            <span className="text-sm font-medium text-slate-500">準備進度</span>
            <span className="text-2xl font-bold text-blue-600">{progressPercentage}%</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2.5">
            <div 
              className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out" 
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-2">
            <p className="text-xs text-slate-400">大項目分類: {categoryCount}</p>
            <p className="text-xs text-slate-400">已完成 {checkedCount} / {totalCount} 項</p>
          </div>
        </div>

        {/* 新增表單區塊與批次整理按鈕 */}
        {!isBatchMode && (
          <div className="mb-6 space-y-3">
            <form onSubmit={handleAddCategory} className="flex gap-2">
              <input
                type="text"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                placeholder="新增大項目分類 (例如：衣物、電子產品)..."
                className="flex-1 bg-white border border-emerald-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              />
              <button 
                type="submit"
                disabled={!newCategoryName.trim()}
                className="bg-emerald-600 text-white rounded-xl px-4 py-3 hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-1 font-medium whitespace-nowrap"
              >
                <FolderOpen size={20} />
                <span className="hidden sm:inline">新增分類</span>
              </button>
            </form>

            <form onSubmit={handleAddItem} className="flex gap-2">
              <input
                type="text"
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                placeholder="新增獨立準備物品..."
                className="flex-1 bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <div className="flex items-center bg-white border border-slate-200 rounded-xl px-2 hidden sm:flex">
                <span className="text-sm text-slate-400 mr-2 ml-2">數量</span>
                <input
                  type="number"
                  min="1"
                  value={newItemQuantity}
                  onChange={(e) => setNewItemQuantity(parseInt(e.target.value) || 1)}
                  className="w-12 text-center bg-transparent focus:outline-none font-medium"
                />
              </div>
              <button 
                type="submit"
                disabled={!newItemName.trim()}
                className="bg-blue-600 text-white rounded-xl px-4 py-3 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Plus size={24} />
              </button>
            </form>
            
            {/* 啟動批次整理模式與排序模式的按鈕 */}
            <div className="flex justify-end gap-2 pt-2">
              {(independentItemCount > 0 || categoryCount > 0) && (
                <button 
                  onClick={toggleSortMode}
                  className={`flex items-center gap-2 text-sm px-4 py-2 rounded-xl border transition-colors font-medium ${
                    isSortMode 
                      ? 'bg-slate-700 text-white border-slate-700 hover:bg-slate-800' 
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <ArrowUpDown size={16} />
                  {isSortMode ? '完成排序' : '手動排序'}
                </button>
              )}
              {independentItemCount > 0 && categoryCount > 0 && (
                <button 
                  onClick={toggleBatchMode}
                  className={`flex items-center gap-2 text-sm px-4 py-2 rounded-xl border transition-colors font-medium ${
                    isBatchMode
                      ? 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700'
                      : 'bg-blue-50 text-blue-600 border-blue-100 hover:bg-blue-100'
                  }`}
                >
                  <CheckSquare size={16} />
                  批次加入分類
                </button>
              )}
            </div>
          </div>
        )}

        {/* 清單列表 */}
        <div className={`space-y-4 ${isBatchMode ? 'opacity-100' : ''}`}>
          {currentItems.length === 0 ? (
            <div className="text-center py-10 text-slate-400">
              <p>清單是空的，開始新增分類或物品吧！</p>
            </div>
          ) : (
            currentItems.map((item, index) => {
              // 渲染分類大項目
              if (item.isCategory) {
                return (
                  <div key={item.id} className={`bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden ${isBatchMode ? 'opacity-50 pointer-events-none' : ''}`}>
                    <div 
                      className="bg-slate-50 px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-slate-100 transition-colors border-b border-slate-100"
                      onClick={() => toggleCategory(item.id)}
                    >
                      <div className="flex items-center flex-1 group">
                        {isSortMode && (
                          <div className="flex flex-col mr-3 text-slate-400" onClick={e => e.stopPropagation()}>
                            <button onClick={() => moveItem(index, -1)} className="p-0.5 hover:text-blue-600 rounded"><ChevronUp size={16} /></button>
                            <button onClick={() => moveItem(index, 1)} className="p-0.5 hover:text-blue-600 rounded"><ChevronDown size={16} /></button>
                          </div>
                        )}
                        <div className={`transform transition-transform ${item.isExpanded ? 'rotate-90' : ''} text-slate-400 mr-2`}>
                          <ChevronRight size={20} />
                        </div>
                        
                        {editingId === item.id ? (
                          <div className="flex items-center flex-1 gap-2" onClick={e => e.stopPropagation()}>
                            <input 
                              type="text"
                              value={editName}
                              onChange={(e) => setEditName(e.target.value)}
                              onBlur={() => saveEdit(item.id)}
                              onKeyDown={(e) => e.key === 'Enter' && saveEdit(item.id)}
                              className="flex-1 bg-white border border-slate-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                              autoFocus
                            />
                          </div>
                        ) : (
                          <div className="flex items-center gap-3">
                            <h2 className="font-bold text-slate-800 text-lg">{item.name}</h2>
                            <span className="text-xs font-medium bg-white text-slate-500 px-2 py-1 rounded-full border border-slate-200">
                              {item.subItems.filter(sub => sub.checked).length} / {item.subItems.length}
                            </span>
                            <button 
                              onClick={(e) => { e.stopPropagation(); startEdit(item.id, item.name); }}
                              className="p-1.5 text-slate-400 opacity-0 group-hover:opacity-100 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all"
                            >
                              <Edit2 size={16} />
                            </button>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-2" onClick={e => e.stopPropagation()}>
                        <button 
                          onClick={() => handleAddSubItem(item.id)}
                          className="flex items-center gap-1 text-sm bg-white text-emerald-600 px-3 py-1.5 rounded-lg border border-emerald-200 hover:bg-emerald-50 transition-colors font-medium"
                        >
                          <ListPlus size={16} />
                          <span className="hidden sm:inline">新增項目</span>
                        </button>
                        <button 
                          onClick={() => deleteItem(item.id)}
                          className="p-1.5 text-slate-400 hover:bg-red-100 hover:text-red-600 rounded-lg transition-colors"
                          title="刪除此分類"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                    
                    {item.isExpanded && (
                      <div className="p-3 bg-white">
                        {item.subItems.length === 0 ? (
                          <p className="text-center text-slate-400 text-sm py-4">分類內目前無物品</p>
                        ) : (
                          item.subItems.map((sub, subIndex) => renderItem(sub, subIndex, item.id))
                        )}
                      </div>
                    )}
                  </div>
                );
              }
              // 渲染獨立無分類項目
              return renderItem(item, index);
            })
          )}
        </div>
      </main>

      {/* 選擇目標分類 Modal (用於批次移動) */}
      {showBatchTargetModal && (
        <div className="fixed inset-0 bg-slate-900/60 flex items-end sm:items-center justify-center z-50 p-0 sm:p-4 transition-opacity">
          <div className="bg-white rounded-t-3xl sm:rounded-3xl p-6 w-full max-w-sm shadow-2xl animate-in slide-in-from-bottom-10 sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-slate-800">移至分類</h3>
              <button onClick={() => setShowBatchTargetModal(false)} className="text-slate-400 hover:text-slate-600">
                <X size={24} />
              </button>
            </div>
            <p className="text-sm text-slate-500 mb-4">
              請選擇要將這 {batchSelectedIds.length} 個物品放入哪個分類中：
            </p>
            <div className="space-y-2 max-h-60 overflow-y-auto mb-6">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => executeBatchMove(cat.id)}
                  className="w-full text-left bg-slate-50 hover:bg-blue-50 hover:text-blue-700 border border-slate-200 hover:border-blue-200 rounded-xl px-4 py-3 font-medium transition-colors flex items-center justify-between"
                >
                  <span>{cat.name}</span>
                  <ChevronRight size={18} className="text-slate-400" />
                </button>
              ))}
              {categories.length === 0 && (
                <p className="text-center text-slate-400 py-4 text-sm">目前沒有可用的分類，請先新增分類。</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 儲存模板 Modal */}
      {showSaveModal && (
        <div className="fixed inset-0 bg-slate-900/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-6 w-full max-w-sm shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-slate-800">儲存為模板</h3>
              <button onClick={() => setShowSaveModal(false)} className="text-slate-400 hover:text-slate-600">
                <X size={24} />
              </button>
            </div>
            <p className="text-sm text-slate-500 mb-4">
              將目前的清單內容（包含數量設定）儲存為新模板，方便下次直接載入。
            </p>
            <input
              type="text"
              value={newTemplateName}
              onChange={(e) => setNewTemplateName(e.target.value)}
              placeholder="例如：游泳裝備清單"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus
            />
            <button 
              onClick={saveAsTemplate}
              disabled={!newTemplateName.trim()}
              className="w-full bg-blue-600 text-white rounded-xl py-3 font-semibold hover:bg-blue-700 disabled:opacity-50 transition-colors"
            >
              確認儲存
            </button>
          </div>
        </div>
      )}

      {/* 載入模板 Modal */}
      {showLoadModal && (
        <div className="fixed inset-0 bg-slate-900/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl w-full max-w-sm shadow-xl overflow-hidden flex flex-col max-h-[80vh]">
            <div className="p-6 pb-4 border-b border-slate-100 flex justify-between items-center bg-white">
              <h3 className="text-xl font-bold text-slate-800">選擇模板</h3>
              <button onClick={() => setShowLoadModal(false)} className="text-slate-400 hover:text-slate-600">
                <X size={24} />
              </button>
            </div>
            
            <div className="overflow-y-auto p-4 space-y-3 bg-slate-50 flex-1">
              <div className="flex gap-2 mb-4">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="flex-1 flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 rounded-xl py-2 hover:bg-slate-50 transition-colors"
                >
                  <Upload size={18} />
                  <span className="font-medium text-sm">匯入模板</span>
                </button>
                <input
                  type="file"
                  accept=".json"
                  ref={fileInputRef}
                  onChange={importTemplates}
                  className="hidden"
                />
                <button
                  onClick={exportTemplates}
                  className="flex-1 flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 rounded-xl py-2 hover:bg-slate-50 transition-colors"
                >
                  <Download size={18} />
                  <span className="font-medium text-sm">匯出模板</span>
                </button>
              </div>

              {templates.length === 0 ? (
                <p className="text-center text-slate-500 py-6">目前沒有儲存的模板</p>
              ) : (
                templates.map(template => (
                  <div key={template.id} className="bg-white border border-slate-200 rounded-2xl p-4 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
                    <button 
                      onClick={() => loadTemplate(template)}
                      className="flex-1 text-left"
                    >
                      <h4 className="font-bold text-slate-800 text-lg">{template.name}</h4>
                      <p className="text-sm text-slate-500 mt-1">{template.items.length} 項物品</p>
                    </button>
                    <button 
                      onClick={() => deleteTemplate(template.id)}
                      className="ml-4 p-2 text-slate-400 hover:bg-red-50 hover:text-red-500 rounded-lg transition-colors"
                      title="刪除模板"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}