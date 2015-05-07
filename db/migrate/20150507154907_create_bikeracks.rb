class CreateBikeracks < ActiveRecord::Migration
  def change
    create_table :bikeracks do |t|

      t.timestamps null: false
    end
  end
end
