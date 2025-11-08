import { useState } from 'react';
import AdminBlogList from './AdminBlogList';
import AdminBlogEditor from './AdminBlogEditor';

type ViewState = 'list' | 'create' | 'edit' | 'preview';

export default function AdminBlogApp() {
  const [currentView, setCurrentView] = useState<ViewState>('list');
  const [currentBlogId, setCurrentBlogId] = useState<string | undefined>(undefined);

  const handleCreateNew = () => {
    setCurrentBlogId(undefined);
    setCurrentView('create');
  };

  const handleEditPost = (id: string) => {
    setCurrentBlogId(id);
    setCurrentView('edit');
  };

  const handleSave = (data: any) => {
    console.log('Saving blog post:', data);
    // TODO: Save to backend
    setCurrentView('list');
  };

  const handleCancel = () => {
    setCurrentView('list');
    setCurrentBlogId(undefined);
  };

  const handlePreview = (data: any) => {
    console.log('Preview blog post:', data);
    // TODO: Show preview modal or navigate to preview page
  };

  const handleLogout = () => {
    // Handled by parent component
  };

  if (currentView === 'list') {
    return (
      <AdminBlogList
        onCreateNew={handleCreateNew}
        onEditPost={handleEditPost}
        onLogout={handleLogout}
      />
    );
  }

  if (currentView === 'create' || currentView === 'edit') {
    return (
      <AdminBlogEditor
        blogId={currentBlogId}
        onSave={handleSave}
        onCancel={handleCancel}
        onPreview={handlePreview}
        onLogout={handleLogout}
      />
    );
  }

  return null;
}
