class ChangeScoreToTimeInUsers < ActiveRecord::Migration[6.0]
  def change
    remove_column :users, :score, :integer
    add_column :users, :time, :integer
  end
end