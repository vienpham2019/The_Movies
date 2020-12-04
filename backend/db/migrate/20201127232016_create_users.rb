class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :password_digest
      t.string :email
      t.string :dob , default: ""
      t.string :gender, default: ""
      t.timestamps
    end
  end
end
