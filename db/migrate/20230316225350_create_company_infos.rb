class CreateCompanyInfos < ActiveRecord::Migration[7.0]
  def change
    create_table :company_infos do |t|
      t.string :name
      t.string :byline
      t.text :bio

      t.timestamps
    end
  end
end
