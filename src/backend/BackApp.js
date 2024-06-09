import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

function BackApp() {
  const [menuItems, setMenuItems] = useState([]);
  const [allergies, setAllergies] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [nutritions, setNutritions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const menuResponse = await supabase.from('MenuTable').select('*');
      const allergyResponse = await supabase.from('AllergyTable').select('*');
      const ingredientResponse = await supabase.from('IngredientTable').select('*');
      const nutritionResponse = await supabase.from('NutritionTable').select('*');

      if (menuResponse.error) {
        console.error('Error fetching menu items:', menuResponse.error);
      } else {
        setMenuItems(menuResponse.data);
      }

      if (allergyResponse.error) {
        console.error('Error fetching allergies:', allergyResponse.error);
      } else {
        setAllergies(allergyResponse.data);
      }

      if (ingredientResponse.error) {
        console.error('Error fetching ingredients:', ingredientResponse.error);
      } else {
        setIngredients(ingredientResponse.data);
      }

      if (nutritionResponse.error) {
        console.error('Error fetching nutrition data:', nutritionResponse.error);
      } else {
        setNutritions(nutritionResponse.data);
      }
    };
    fetchData();
  }, []);

  const getAllergyDetails = (allergyId) => {
    const allergy = allergies.find(a => a.id === allergyId);
    if (allergy) {
      return (
        <ul>
          {Object.entries(allergy).map(([key, value]) => (
            key !== 'id' && key !== 'created_at' && <li key={key}>{key}: {value.toString()}</li>
          ))}
        </ul>
      );
    }
    return null;
  };

  const getIngredientDetails = (ingredientId) => {
    const ingredient = ingredients.find(i => i.id === ingredientId);
    if (ingredient) {
      return (
        <ul>
          {Object.entries(ingredient).map(([key, value]) => (
            key !== 'id' && key !== 'created_at' && <li key={key}>{key}: {value}</li>
          ))}
        </ul>
      );
    }
    return null;
  };

  const getNutritionDetails = (nutritionId) => {
    const nutrition = nutritions.find(n => n.id === nutritionId);
    if (nutrition) {
      return (
        <ul>
          {Object.entries(nutrition).map(([key, value]) => (
            key !== 'id' && key !== 'created_at' && <li key={key}>{key}: {value}</li>
          ))}
        </ul>
      );
    }
    return null;
  };

  return (
    <div>
      <h1>Menu Items</h1>
      <ul>
        {menuItems.map(item => (
          <li key={item.id}>
            {item.menu} - {item.price}
            <div>
              <strong>Ingredients:</strong>
              {getIngredientDetails(item.ingredient_id)}
            </div>
            <div>
              <strong>Allergies:</strong>
              {getAllergyDetails(item.allergy_id)}
            </div>
            <div>
              <strong>Nutrition:</strong>
              {getNutritionDetails(item.nutrition_id)}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BackApp;
