require 'rails_helper'

RSpec.describe Article, type: :model do
  describe 'バリデーションのテスト' do
    let(:user) { User.create!(username: 'Test User', email: 'test@example.com', password: 'password') }

    context '作成されない' do
      it 'タイトルがnilの場合' do
        article = Article.new(title: nil, content: 'Valid Content', user: user)
        expect(article).not_to be_valid
      end

      it '本文がnilの場合' do
        article = Article.new(title: 'Valid Title', content: nil, user: user)
        expect(article).not_to be_valid
      end
    end

    context '問題なく作成される' do
      it 'タイトルと本文が存在する場合' do
        article = Article.new(title: 'Valid Title', content: 'Valid Content', user: user)
        expect(article).to be_valid
      end
    end
  end
end
