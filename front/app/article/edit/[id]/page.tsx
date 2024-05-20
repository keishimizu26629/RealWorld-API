'use client';

import { useArticleEditViewModel } from './articleEditViewModel';

export default function EditArticlePage() {
  const {
    title,
    content,
    errorMessages,
    successMessage,
    handleTitleChange,
    handleContentChange,
    handlePublish,
  } = useArticleEditViewModel();

  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            {errorMessages.length > 0 && (
              <ul className="error-messages">
                {errorMessages.map((message, index) => (
                  <li key={index}>{message}</li>
                ))}
              </ul>
            )}
            {successMessage && (
              <div className="success-message">
                {successMessage}
              </div>
            )}
            <form>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Article Title"
                    value={title}
                    onChange={handleTitleChange}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <textarea
                    className="form-control"
                    placeholder="Write your article (in markdown)"
                    value={content}
                    onChange={handleContentChange}
                  ></textarea>
                </fieldset>
                <button
                  className="btn btn-lg pull-xs-right btn-primary"
                  type="button"
                  onClick={handlePublish}
                >
                  Update Article
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
